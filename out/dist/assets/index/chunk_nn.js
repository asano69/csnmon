import { Ya, b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const nn = e(b(), 1);
const F8 = [
    {
        language: "AR",
        name: "Arabic",
        nameJa: "アラビア語"
    },
    {
        language: "BG",
        name: "Bulgarian",
        nameJa: "ブルガリア語"
    },
    {
        language: "CS",
        name: "Czech",
        nameJa: "チェコ語"
    },
    {
        language: "DA",
        name: "Danish",
        nameJa: "デンマーク語"
    },
    {
        language: "DE",
        name: "German",
        nameJa: "ドイツ語"
    },
    {
        language: "EL",
        name: "Greek",
        nameJa: "ギリシャ語"
    },
    {
        language: "EN-GB",
        name: "English (British)",
        nameJa: "英語（アメリカ）"
    },
    {
        language: "EN-US",
        name: "English (American)",
        nameJa: "英語（イギリス）"
    },
    {
        language: "ES",
        name: "Spanish",
        nameJa: "スペイン語"
    },
    {
        language: "ET",
        name: "Estonian",
        nameJa: "エストニア語"
    },
    {
        language: "FI",
        name: "Finnish",
        nameJa: "フィンランド語"
    },
    {
        language: "FR",
        name: "French",
        nameJa: "フランス語"
    },
    {
        language: "HU",
        name: "Hungarian",
        nameJa: "ハンガリー語"
    },
    {
        language: "ID",
        name: "Indonesian",
        nameJa: "インドネシア語"
    },
    {
        language: "IT",
        name: "Italian",
        nameJa: "イタリア語"
    },
    {
        language: "JA",
        name: "Japanese",
        nameJa: "日本語"
    },
    {
        language: "KO",
        name: "Korean",
        nameJa: "韓国語"
    },
    {
        language: "LT",
        name: "Lithuanian",
        nameJa: "リトアニア語"
    },
    {
        language: "LV",
        name: "Latvian",
        nameJa: "ラトビア語"
    },
    {
        language: "NB",
        name: "Norwegian",
        nameJa: "ノルウェー語"
    },
    {
        language: "NL",
        name: "Dutch",
        nameJa: "オランダ語"
    },
    {
        language: "PL",
        name: "Polish",
        nameJa: "ポーランド語"
    },
    {
        language: "PT-BR",
        name: "Portuguese (Brazilian)",
        nameJa: "ポルトガル語（ブラジル）"
    },
    {
        language: "PT-PT",
        name: "Portuguese (European)",
        nameJa: "ポルトガル語"
    },
    {
        language: "RO",
        name: "Romanian",
        nameJa: "ルーマニア語"
    },
    {
        language: "RU",
        name: "Russian",
        nameJa: "ロシア語"
    },
    {
        language: "SK",
        name: "Slovak",
        nameJa: "スロバキア語"
    },
    {
        language: "SL",
        name: "Slovenian",
        nameJa: "スロベニア語"
    },
    {
        language: "SV",
        name: "Swedish",
        nameJa: "スウェーデン語"
    },
    {
        language: "TR",
        name: "Turkish",
        nameJa: "トルコ語"
    },
    {
        language: "UK",
        name: "Ukrainian",
        nameJa: "ウクライナ語"
    },
    {
        language: "ZH",
        name: "Chinese (simplified)",
        nameJa: "中国語（簡体字）"
    }
];
const gJ = [
    {
        language: "ja",
        name: "日本語"
    },
    {
        language: "en",
        name: "English"
    }
];
const z8 = a(({ lang, languages, onChange })=>nn.default.createElement("select", {
        className: "form-control",
        onChange,
        defaultValue: lang
    }, nn.default.createElement("option", {
        value: "",
        disabled: true
    }, "select language"), languages.map((n)=>nn.default.createElement("option", {
            value: n.language,
            key: n.language
        }, n.name))), "LanguageSelect");
export const hJ = a(()=>{
    let e = Ya.CurrentUser.get();
    let [t, setT] = nn.useState(e.uiLanguage || "");
    let [n, setN] = nn.useState(e.translation?.nativeLanguage || "");
    let [s, setS] = nn.useState(e.translation?.to || "");
    let [l, setL] = nn.useState(null);
    let [m, setM] = nn.useState(null);
    let [disabled, setDisabled] = nn.useState(false);
    async function onSubmit(y) {
        y.preventDefault();
        setDisabled(true);
        setL(null);
        setM(null);
        try {
            let k = {
                uiLanguage: t
            };
            if (!(n === "" && s === "")) {
                k.translation = {
                    nativeLanguage: n,
                    to: s
                };
            }
            await Ya.CurrentUser.update(k);
            setL("Saved successfully.");
        } catch (error) {
            let _ = error.response?.data?.message || error.message || "Can't connect to the servers. Please try again later.";
            setM(_);
        }
        setDisabled(false);
        return false;
    }
    a(onSubmit, "onSubmit");
    return nn.default.createElement("form", {
        onSubmit,
        className: "languages-settings-form"
    }, l && nn.default.createElement("div", {
        className: "alert alert-success"
    }, l), m && nn.default.createElement("div", {
        className: "alert alert-danger"
    }, m), nn.default.createElement("h4", null, "UI Language (beta)"), nn.default.createElement("div", {
        className: "form-group"
    }, nn.default.createElement(z8, {
        lang: t,
        languages: gJ,
        onChange: (y)=>setT(y.target.value)
    })), nn.default.createElement("hr", null), nn.default.createElement("h4", null, "Translation mode (beta)"), nn.default.createElement("div", {
        className: "form-group"
    }, nn.default.createElement("label", null, "Your native language"), nn.default.createElement(z8, {
        lang: n,
        languages: F8,
        onChange: (y)=>setN(y.target.value)
    })), nn.default.createElement("div", {
        className: "form-group"
    }, nn.default.createElement("label", null, "Translate to"), nn.default.createElement(z8, {
        lang: s,
        languages: F8,
        onChange: (y)=>setS(y.target.value)
    })), nn.default.createElement("button", {
        type: "submit",
        className: "btn btn-primary btn-auto-block",
        disabled
    }, "Save changes"));
}, "LanguagesSettingsForm");
