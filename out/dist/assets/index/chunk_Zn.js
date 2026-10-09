import { b, x } from "../chunks/chunk-GCRJFCUZ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
const Zn = e(b(), 1);
export function Mx({ project, type, state }) {
    let n = project.publicVisible ? Zn.default.createElement(Zn.default.Fragment, null, Zn.default.createElement("label", null, "Your project is public."), Zn.default.createElement("p", {
        className: "help-block"
    }, "Anyone can access the uploaded ", type, "s.")) : Zn.default.createElement(Zn.default.Fragment, null, Zn.default.createElement("label", null, "Your project is private."), Zn.default.createElement("p", {
        className: "help-block"
    }, "Only project members can access the uploaded ", type, "s."));
    let o = state.uploadFileTo !== state.uploadImageTo || type === "file" ? Zn.default.createElement(r_e, {
        project
    }) : null;
    return Zn.default.createElement("div", {
        className: `gcs-${type}-setting advanced-setting`
    }, n, o);
}
export function r_e({ project }) {
    let [t, setT] = Zn.useState(null);
    let [n, setN] = Zn.useState(null);
    Zn.useEffect(()=>{
        (async ()=>{
            try {
                let a = await x.get(`/api/gcs/${project.name}/usage`);
                setT(a.data);
            } catch (error) {
                console.error(error);
                if (error.response && error.response.data && error.response.data.message) {
                    return setN(error.response.data.message);
                }
                return setN("Can’t connect to the servers. Please try again later.");
            }
        })();
    }, [
        project
    ]);
    let s = n || (t ? t.readable ? Zn.default.createElement(Zn.default.Fragment, null, t.readable.totalFileSize, " of ", t.readable.capacity, " has been used. ", Zn.default.createElement("a", {
        href: "/settings/file-capacity"
    }, "Add capacity.")) : "Could not load usage information. Try again later." : Zn.default.createElement("i", {
        className: "fa fa-spinner"
    }));
    return Zn.default.createElement("p", {
        className: "usage help-block"
    }, s);
}
