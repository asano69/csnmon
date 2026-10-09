import { L, Ya, b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const Yn = e(b(), 1);
export function nY({ links }) {
    return Yn.default.createElement("li", {
        className: "relation-label links"
    }, Yn.default.createElement("a", {
        title: `${links?.length} pages`
    }, Yn.default.createElement("span", {
        className: "title"
    }, "Links"), Yn.default.createElement("span", {
        className: "kamon kamon-link-on icon-lg"
    })), Yn.default.createElement("span", {
        className: "arrow"
    }));
}
export function iY({ links }) {
    return Yn.default.createElement("li", {
        className: "relation-label project-links"
    }, Yn.default.createElement("a", {
        title: `${links?.length} pages`
    }, Yn.default.createElement("span", {
        className: "title"
    }, "External links"), Yn.default.createElement("span", {
        className: "kamon kamon-link-on icon-lg"
    })), Yn.default.createElement("span", {
        className: "arrow"
    }));
}
export function oY() {
    return Yn.default.createElement("li", {
        className: "relation-label empty-links"
    }, Yn.default.createElement("a", null, Yn.default.createElement("span", {
        className: "title"
    }, "New Links"), Yn.default.createElement("span", {
        className: "kamon kamon-link-off icon-lg"
    })), Yn.default.createElement("span", {
        className: "arrow"
    }));
}
export function sY({ title, anchorTitle }) {
    let name = Ya.CurrentProject.get().name;
    let onClick = a(()=>{
        Ya.PageTransitionContext.set(title, {
            navigationUI: "related-pages",
            pageId: Ya.Page.id
        });
    }, "onClick");
    return Yn.default.createElement("li", {
        className: "relation-label headword"
    }, Yn.default.createElement("a", {
        href: `/${name}/${L(title)}`,
        title: anchorTitle,
        onClick
    }, Yn.default.createElement("span", {
        className: "title"
    }, title), Yn.default.createElement("span", {
        className: "kamon kamon-link-on icon-lg"
    })), Yn.default.createElement("span", {
        className: "arrow"
    }));
}
export const Tc = e(b(), 1);
