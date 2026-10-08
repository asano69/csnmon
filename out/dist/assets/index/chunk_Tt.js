import { A, Y, Ya, Z, b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { X, ge } from "./chunk_ge.js";
const Tt = e(b(), 1);
const SR = e(A(), 1);
const _E = e(ge(), 1);
export function Hme({ error }) {
    switch(error){
        case "pull-failed":
            return Tt.default.createElement(Tt.default.Fragment, null, Tt.default.createElement(Y, null, "最新のページ内容を取得できませんでした。ブラウザをリロードしてください"), Tt.default.createElement(Z, null, "Failed to load the latest content. Please reload your browser."));
        case "not-fast-forward":
            return Tt.default.createElement(Tt.default.Fragment, null, Tt.default.createElement(Y, null, "他の人が先にこのページを更新しました。未保存の編集内容をコピーして退避してから、キャンセルで最新の内容に戻してください"), Tt.default.createElement(Z, null, "Someone else has updated this page. Copy your unsaved edits somewhere safe, then press Cancel to load the latest content."));
        case "duplicate-title":
            return Tt.default.createElement(Tt.default.Fragment, null, Tt.default.createElement(Y, null, "同じタイトルのページが既にあります。タイトルを変えてから保存し直してください"), Tt.default.createElement(Z, null, "A page with the same title already exists. Change the title, then save again."));
        case "save-failed":
            return Tt.default.createElement(Tt.default.Fragment, null, Tt.default.createElement(Y, null, "保存に失敗しました。通信環境を確認して保存し直してください"), Tt.default.createElement(Z, null, "Failed to save. Please check your network and try saving again."));
    }
}
export function CN() {
    let [, setE] = Tt.useState(0);
    let t = a(()=>setE(Date.now()), "rerender");
    X(Ya.DisableRealtimeCollaboration, t);
    X(Ya.Page, t);
    let Ya_DisableRealtimeCollaboration = Ya.DisableRealtimeCollaboration;
    if (!Ya_DisableRealtimeCollaboration.enabled || Ya.Page.fromCacheStorage || Ya.PageHistory.isEnable) {
        return null;
    }
    return Tt.default.createElement(SR.When, {
        project_member_user: true
    }, Tt.default.createElement("div", {
        className: "disable-realtime-collaboration-alert"
    }, Ya_DisableRealtimeCollaboration.error && Tt.default.createElement("div", {
        className: "alert alert-danger",
        role: "alert"
    }, Tt.default.createElement(Hme, {
        error: Ya_DisableRealtimeCollaboration.error
    })), Ya_DisableRealtimeCollaboration.isEditing ? Tt.default.createElement("div", {
        className: "alert alert-warning",
        role: "alert"
    }, Tt.default.createElement(Y, null, "編集中の変更は「保存」を押すまで保存されません"), Tt.default.createElement(Z, null, 'Changes are not saved until you press "Save".'), " ", Tt.default.createElement("button", {
        onClick: ()=>Ya.DisableRealtimeCollaboration.save(),
        className: _E.default("btn", "btn-primary", {
            disabled: Ya_DisableRealtimeCollaboration.state !== "editing"
        })
    }, Tt.default.createElement(Y, null, "保存"), Tt.default.createElement(Z, null, "Save"), Ya_DisableRealtimeCollaboration.state === "saving" && Tt.default.createElement(Tt.default.Fragment, null, " ", Tt.default.createElement("i", {
        className: "fa fa-spinner"
    }))), " ", Tt.default.createElement("button", {
        onClick: ()=>Ya.DisableRealtimeCollaboration.cancelEditing(),
        className: _E.default("btn", "btn-default", {
            disabled: Ya_DisableRealtimeCollaboration.state !== "editing"
        })
    }, Tt.default.createElement(Y, null, "キャンセル"), Tt.default.createElement(Z, null, "Cancel"))) : Tt.default.createElement("div", {
        className: "alert alert-info",
        role: "alert"
    }, Tt.default.createElement(Y, null, "このプロジェクトではリアルタイム共同編集が無効になっています"), Tt.default.createElement(Z, null, "Real-time collaboration is disabled in this project."), " ", Tt.default.createElement("button", {
        onClick: ()=>Ya.DisableRealtimeCollaboration.startEditing(),
        className: _E.default("btn", "btn-primary", {
            disabled: Ya_DisableRealtimeCollaboration.state === "pulling"
        })
    }, Tt.default.createElement(Y, null, "編集開始"), Tt.default.createElement(Z, null, "Start editing"), Ya_DisableRealtimeCollaboration.state === "pulling" && Tt.default.createElement(Tt.default.Fragment, null, " ", Tt.default.createElement("i", {
        className: "fa fa-spinner"
    }))))));
}
