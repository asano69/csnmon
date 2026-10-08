import { Ya, b, ba, x } from "../chunks/chunk-3PYJHPBQ.js";
import { a as a_1, e } from "../chunks/chunk-FXCI2R73.js";
import { pd } from "./chunk_bg.js";
import { E9 } from "./chunk__9.js";
const Ao = e(b(), 1);
const tZ = e(ba(), 1);
export function S9({ searchQuery }) {
    let [t, setT] = Ao.useState({
        data: null,
        waitingApiResponse: false,
        errorMessage: ""
    });
    Ao.useEffect(()=>{
        let a = a_1(()=>{
            if (Ya.PageList.searchBackend !== "elasticsearch") {
                return null;
            }
            if (window.scrollY + window.innerHeight > document.body.clientHeight - (150 + 77 * 2)) {
                window.removeEventListener("scroll", a);
                onSubmit();
            }
        }, "onScroll");
        setT({
            data: null,
            errorMessage: ""
        });
        window.addEventListener("scroll", a, {
            passive: true
        });
        setTimeout(()=>a(), 500);
        return ()=>{
            window.removeEventListener("scroll", a);
        };
    }, [
        searchQuery
    ]);
    let onSubmit = a_1(async (a)=>{
        let l = Ya.ProjectsLastAccessed.get();
        let ids = Ya.ProjectList.getWatchProjects().sort((g, v)=>{
            if (l[g.id] > l[v.id]) {
                return -1;
            }
            return 1;
        }).map((g)=>g.id);
        if (ids.length > 50) {
            ids.length = 50;
        }
        if (a) {
            a.preventDefault();
        }
        let f = `/api/projects/search/watch-list?${tZ.default.stringify({
            q: searchQuery,
            ids
        })}`;
        setT({
            waitingApiResponse: true
        });
        try {
            let g = await x.get(f, {
                skipTrackLoading: true
            });
            setT({
                data: g.data,
                waitingApiResponse: false,
                errorMessage: ""
            });
        } catch (error) {
            let errorMessage = error.response?.data?.message || error.message || "Can't connect to the servers. Please try again later.";
            setT({
                waitingApiResponse: false,
                errorMessage
            });
        }
    }, "onSubmit");
    let o = a_1(()=>{
        let disabled = t.waitingApiResponse || Ya.PageList.searchBackend !== "elasticsearch";
        let { errorMessage } = t;
        return Ao.default.createElement("form", {
            onSubmit
        }, Ao.default.createElement("div", {
            className: "text-center"
        }, Ao.default.createElement("button", {
            type: "submit",
            className: "project-search-button btn btn-auto-block btn-default",
            disabled
        }, 'Search "', searchQuery, '"', " ", disabled ? Ao.default.createElement("i", {
            className: "fa fa-spinner"
        }) : null), errorMessage && Ao.default.createElement("div", {
            className: "error alert alert-info"
        }, errorMessage)));
    }, "renderSearchButton");
    let s = a_1(()=>{
        let name = Ya.CurrentProject.get().name;
        let l = t.data.projects.filter((c)=>c.name !== name).sort((c, m)=>{
            if (c.name.toLowerCase() < m.name.toLowerCase()) {
                return -1;
            }
            return 1;
        });
        if (l.length < 1) {
            return Ao.default.createElement(pd, {
                kind: "project",
                searchQuery
            });
        }
        return Ao.default.createElement("div", {
            className: "project-search-result"
        }, Ao.default.createElement("ul", {
            className: "list"
        }, l.map((project)=>Ao.default.createElement(E9, {
                project,
                searchQuery,
                key: project.name
            }))));
    }, "renderSearchResult");
    return Ao.default.createElement("div", {
        className: "project-search"
    }, Ao.default.createElement("div", {
        className: "project-search-count"
    }, "Search from watch projects"), t.data ? s() : o());
}
