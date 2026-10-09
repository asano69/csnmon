# QuickSearch / titleLc 検索アルゴリズムの全貌

提供されたソース(`chunk-3PYJHPBQ.js` 内の `QuickSearch` ストア)を読んだ結果をまとめます。

## 1. 全体の呼び出し関係

```
QuickSearch.load(projectName)            ← debounce(trailing)
 ├─ getCache()   : Service Worker の api cache から titles を取得
 ├─ fetch()      : /api/pages/{project}/search/titles を followingId でページング取得
 └─ set(pages) → this.source = pages → compile()

compile()                                 ← debounce(trailing)
 ├─ 各ページ/リンク先から titleLc, searchTitleLc, titleLengthForSort を生成
 ├─ titleLc で重複排除 → 長さ順/更新日順ソート → this.pages
 └─ titleLcMap / idMap / existsMap を構築

search(text, splitter)                    ← 外部API (リンク補完や QuickSearch UI)
 ├─ keywordSearch(text, splitter)         ← 常に実行
 └─ (text.length >= 3 && 結果 <= 10) → approximatePatternSearch(text)
       └─ asearch(` ${text} `) の編集距離1以内一致 (title で判定)
 → 結果を titleLc で uniq し lastSearchResult にキャッシュ

linkSuggest / iconSuggest / hashTagSuggest   ← search() の上位ラッパー
```

## 2. titleLc の正規化

```js
const toTitleLc = fe = t => spaceToUnderscore(t).toLowerCase()   // pa(t) = t.replace(/ /g,"_")
```

`compile()` 内ではさらに `title.normalize("NFC")` を通してから `fe()` を適用します。

```js
let T = fe(title.normalize("NFC"));           // titleLc
searchTitleLc = r(T)                          // r: "_" を含むなら全て除去
```

つまり:

| フィールド | 内容 | 用途 |
|---|---|---|
| `titleLc` | NFC → スペースを`_` → 小文字 | 同一性判定、`titleLcMap` のキー |
| `searchTitleLc` | `titleLc` から `_` を全削除 | **keywordSearch の部分一致対象** |
| `titleLengthForSort` | 末尾の数字/記号を落とした長さ | ソートキー |

`searchTitleLc` が `_` を除去しているので、クエリ側にスペースがあっても単語分割後に「スペース無しの連結タイトル」に対して部分一致します(日本語タイトルと英語の混在にも効く)。

## 3. 索引の構築 (`compile`)

1. `source` の各ページから `{id, title, titleLc, searchTitleLc, titleLengthForSort, updated, exists:true, image, linksLc}` を作る。
2. 各ページの `links` からも **未作成リンク先** を `{exists:false, updated:0}` として別配列に積む。
3. 存在判定用 `existsMap`(Map<titleLc,true>)に、ページ自身と、**自分以外のページ**のリンク先を登録。
4. `[実在ページ, リンク先]` の順に走査し、`titleLc` で重複排除(先勝ち。実在ページが優先される)。
5. ソート:
   ```js
   if (a.titleLengthForSort === b.titleLengthForSort)
       return b.updated > a.updated ? ... : 更新が新しい順
   return a.titleLengthForSort - b.titleLengthForSort   // 短いタイトル優先
   ```
   `titleLengthForSort` は `getLengthForSort`:
   ```js
   w.replace(/\d+/g,"_").replace(/[#\-_/.,\s()<>{}（）]+[a-z]?$/i,"_").length
   ```
   連番(`メモ 2024-01-01` 等)の数字を潰し、末尾の区切り+英字1文字を落とすことで、「短い本体タイトル」を上位にする狙いです。
6. `titleLcMap`, `idMap` を作成。1000件ごとに `await delay(0 or 100)` でUIをブロックしないよう分割処理し、ウィンドウが非フォーカスなら30〜90秒待つか focus まで遅延します。

## 4. 検索本体

### 4.1 `keywordSearch(e, splitter=/\s+/)`

```js
if (e.length < 1) return this.pages;
q = e.trim().toLowerCase();
cache: keywordResultsCache.find(c => c.splitter===s && c.query===q) → hit で即return
prefix: keywordResultsCache.find(c => c.splitter===s && q.startsWith(c.query))
words = q.split(splitter)
matchesWords = page => words.every(w => page.searchTitleLc.includes(w))   // AND部分一致
候補 = prefix?.results || this.pages
```

- **AND の部分一致**(順序不問)。
- 結果が 10000 件を超えたら打ち切り、その場合キャッシュしない。
- キャッシュは最大10件(LRU ではなく `unshift` + `pop`)。
- インクリメンタル入力の高速化: 直前のクエリが前方一致するなら、その結果集合のみを再フィルタ。

### 4.2 `approximatePatternSearch(e)`(あいまい検索)

```js
r = asearch(` ${e} `)                       // 前後に空白を足す
cache: asearchResultsCache.find(c => e.includes(c.query))
prefilter: !cache && e.length>3 && pages.length>10000
           ? approximatePatternSearch(e.slice(0,3))   // 再帰: 先頭3文字で絞る
           : null
候補 = cache?.results || prefilter || this.pages
f = 候補.filter(p => r(p.title, 1))        // title(大文字小文字保持)に対し編集距離1
```

- asearch は `src/share` 側の自前実装(`y_` モジュール、Bitap 系のビットパラレル近似マッチ)。`r(text, 1)` は **許容エラー数1** の `match(text, level)`。
- 大文字・小文字は asearch 内部で `toupper/tolower` を同一ビットに立てるため区別されません。
- `n` が「キャッシュ命中」を意味するので、**`e.includes(c.query)`** は「今回のクエリが過去クエリを含む(=より長い)」場合に絞り込みとして再利用する判定です。
- 候補が1万件超かつ絞り込みで 10000 件以上減った場合のみキャッシュ。

### 4.3 `search(e, splitter)`

```js
e = e.trim()
lastSearchResult が同一(splitter,text)なら返す
o = keywordSearch(e, splitter)
if (e.length >= 3 && o.length <= 10) {
    o = uniqBy(o.concat(approximatePatternSearch(e)), "titleLc")   // キーワード結果が先、曖昧結果が後
}
lastSearchResult = {...}
```

つまり **「部分一致が10件以下しかなく、入力が3文字以上のときだけ」曖昧検索で補完** します。

## 5. 上位ラッパー

### `linkSuggest(e, {limit=6, splitter})` (`[` 補完)

```js
e = e.normalize("NFC")
iconSet = Page.icons の titleLc
for y of search(e, splitter):
    exists(y.titleLc) かつ
    !(y.title===Page.title && !y.image) かつ !(y.title===e && !y.image) なら採用判定:
       headLength < 3 && y.image なら:
            iconSet に含まれる → c(自ページアイコン群)
            else ユーザー名と一致   → u(ユーザーアイコン群)
            else                   → d(通常)
       それ以外 → d
    headLength>=3 && headLength+d.length>=limit  または  d.length>=limit*3 で break
return [...c, ...u, ...d].slice(0, limit)
```

優先順位: **このページで既に使用しているアイコン > メンバーのユーザーアイコン > その他**(アイコン付きのみ先頭3枠まで)、残りは `search` の順(=短いタイトル優先→更新新しい順)。

### `iconSuggest`
`linkSuggest(limit:10)` の結果を「画像あり」「なし」に分け、画像ありを先頭に6件。

### `hashTagSuggest(e, {limit=6})`
- `_` 始まりの入力: `^escape(e)` の前方一致(case-insensitive)で `pa(title) !== e` のもの。
- それ以外は `linkSuggest(splitter:/_+/g)` で `_` 区切りを分割キーワードとして使用。
- 最後に `id` で uniq。

### その他
- `find(title)`: `titleLcMap.get(fe(title.normalize("NFC")))`
- `exists(title)`: `existsMap.has(fe(title))`
- `update/delete/updateLink`: `source` を差分更新して `compile()` をデバウンス再実行。

## 6. 特徴まとめ

1. **2段構え**: まず高速な AND 部分一致、不足時(≤10件)のみ asearch による編集距離1の曖昧一致。
2. **正規化**: NFC + 小文字 + `空白→_`、検索用は更に `_` 除去(`searchTitleLc`)。
3. **ランキング**: 検索スコアは無く、事前ソート(短い本体タイトル優先→更新日降順)がそのまま順位。関連度計算なし。
4. **インクリメンタル最適化**: 前方一致する直前クエリの結果集合を再利用(keyword/asearch 両方、最大10件キャッシュ)、asearch は先頭3文字で事前絞り込み。
5. **UI非ブロック**: 1000件ごとに delay、非フォーカス時は compile 自体を遅延。

## 7. 未確認点(次に読むと良い箇所)

- `y_`(asearch 実装)のビット演算の詳細: `Sc=[0x80000000,0,0,0]` の4語が「エラー0〜3」の状態、`n` が空白用マスク。編集距離1(`b=1`)は `y[1]`(`state[1]`) と `s`(終端ビット)の AND で判定しています。必要なら詳細を解説します。
- `/api/pages/{project}/search/titles` のサーバ応答形式(`id,title,updated,image,links`)。
- UI側(`QuickSearch` コンポーネント)が `search` にどの `splitter` を渡すか。`rg "QuickSearch.search\|linkSuggest"` で呼び出し側を追うのが次の一手です。

調査用の grep 例:

```sh
rg -n "QuickSearch\.(search|linkSuggest|iconSuggest|hashTagSuggest)" index/
rg -n "searchTitleLc|titleLengthForSort" chunks/
```
