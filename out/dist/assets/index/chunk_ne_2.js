import { $a, Y, Z, b } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { ge } from "./chunk_ge.js";
export const ne = e(b(), 1);
const Ms = e(b(), 1);
export const b8 = class b8 extends Ms.Component {
    constructor(t){
        super(t);
        this.state = {
            showMore: false
        };
    }
    render() {
        let { showMore } = this.state;
        let r = a(()=>Ms.default.createElement($a, {
                role: "button",
                onClick: ()=>this.setState({
                        showMore: false
                    })
            }, "« ", Ms.default.createElement(Y, null, "閉じる"), Ms.default.createElement(Z, null, "Close")), "CloseLink");
        let n = a(()=>Ms.default.createElement($a, {
                role: "button",
                onClick: ()=>this.setState({
                        showMore: true
                    })
            }, Ms.default.createElement(Y, null, "詳細"), Ms.default.createElement(Z, null, "See details"), " »"), "OpenLink");
        if (showMore) {
            return Ms.default.createElement(Ms.Fragment, null, this.props.children, Ms.default.createElement(r, null));
        }
        return Ms.default.createElement(n, null);
    }
};
export const oo = b8;
export const Pu = e(b(), 1);
export const sX = e(ge(), 1);
