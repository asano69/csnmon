import { Ya, x } from "../chunks/chunk-3PYJHPBQ.js";
import { a as a_1 } from "../chunks/chunk-FXCI2R73.js";
import { on, pd, y9 } from "./chunk_bg.js";
export function _9({ searchQuery, children }) {
    let [r, setR] = on.useState({
        data: null,
        waitingApiResponse: false,
        errorMessage: ""
    });
    on.useEffect(()=>{
        let l = a_1(()=>{
            if (Ya.PageList.searchBackend !== "elasticsearch") {
                return null;
            }
            if (window.scrollY + window.innerHeight > document.body.clientHeight - (150 + 77 * 2)) {
                window.removeEventListener("scroll", l);
                onSubmit();
            }
        }, "onScroll");
        setR({
            data: null,
            errorMessage: ""
        });
        window.addEventListener("scroll", l, {
            passive: true
        });
        setTimeout(()=>l(), 500);
        return ()=>{
            window.removeEventListener("scroll", l);
        };
    }, [
        searchQuery
    ]);
    let onSubmit = a_1(async (l)=>{
        if (l) {
            l.preventDefault();
        }
        let m = `/api/projects/search/query?${y9.default.stringify({
            q: searchQuery
        })}`;
        setR({
            waitingApiResponse: true
        });
        try {
            let f = await x.get(m, {
                skipTrackLoading: true
            });
            setR({
                data: f.data,
                waitingApiResponse: false,
                errorMessage: ""
            });
        } catch (error) {
            let errorMessage = error.response?.data?.message || error.message || "Can't connect to the servers. Please try again later.";
            setR({
                waitingApiResponse: false,
                errorMessage
            });
        }
    }, "onSubmit");
    let s = a_1(()=>{
        let r_waitingApiResponse = r.waitingApiResponse;
        let { errorMessage } = r;
        return on.default.createElement("form", {
            onSubmit
        }, on.default.createElement("div", {
            className: "text-center"
        }, on.default.createElement("button", {
            type: "submit",
            className: "project-search-button btn btn-auto-block btn-default",
            disabled: r_waitingApiResponse
        }, 'Search "', searchQuery, '"', " ", r_waitingApiResponse ? on.default.createElement("i", {
            className: "fa fa-spinner"
        }) : null), errorMessage && on.default.createElement("div", {
            className: "error alert alert-info"
        }, errorMessage)));
    }, "renderSearchButton");
    let a = a_1(()=>{
        let name = Ya.CurrentProject.get().name;
        let c = r.data.projects.filter((m)=>m.name !== name).sort((m, f)=>{
            if (m.name.toLowerCase() < f.name.toLowerCase()) {
                return -1;
            }
            return 1;
        });
        if (c.length < 1) {
            return on.default.createElement(on.default.Fragment, null, on.default.createElement(pd, {
                kind: "project",
                searchQuery
            }), children);
        }
        return on.default.createElement(on.default.Fragment, null, on.default.createElement("div", {
            className: "project-search-result"
        }, on.default.createElement("ul", {
            className: "list"
        }, c.map((project)=>on.default.createElement(E9, {
                project,
                searchQuery,
                key: project.name
            })))), children);
    }, "renderSearchResult");
    return on.default.createElement("div", {
        className: "project-search"
    }, on.default.createElement("div", {
        className: "project-search-count"
    }, "Search from all projects"), r.data ? a() : s());
}
export var E9 = a_1(({ project, searchQuery })=>{
    let r = y9.default.stringify({
        q: searchQuery
    });
    let href = `/${project.name}/search/page?${r}`;
    return on.default.createElement("li", {
        className: "page-list-item list-style-item"
    }, on.default.createElement("a", {
        href,
        target: "_blank",
        rel: "noreferrer"
    }, project.image && on.default.createElement("div", {
        className: "icon"
    }, on.default.createElement("img", {
        src: project.image
    })), on.default.createElement("div", {
        className: "content"
    }, on.default.createElement("div", {
        className: "title-with-description"
    }, project.displayName, " (/", project.name, ")"))));
}, "ProjectLinkItem");
