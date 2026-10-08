import { Ya, _a, b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
import { mt } from "./chunk_Yz.js";
const jS = e(b(), 1);
const qA = e(_a(), 1);
export const RA = class RA extends mt {
    static get propTypes() {
        return {
            url: qA.default.string.isRequired,
            children: qA.default.array
        };
    }
    constructor(t){
        super(t);
        this.subscribe(Ya.Layout);
    }
    onStoreChange() {
        if (this.video && Ya.Layout.get() !== "page") {
            this.video.pause();
        }
    }
    render() {
        let { url, children } = this.props;
        return jS.default.createElement("div", {
            className: "video-player"
        }, children && jS.default.createElement("span", {
            className: "image"
        }, children), jS.default.createElement("video", {
            ref: (s)=>{
                this.video = s;
            },
            className: "video",
            style: {
                display: children ? "none" : "inline-block"
            },
            controls: true,
            loop: true,
            src: url,
            onCanPlay: a(()=>{
                requestAnimationFrame(Ya.LineDOM.update);
            }, "onCanPlay")
        }));
    }
};
export const gc = RA;
