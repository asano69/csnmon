import { _a, b } from "../chunks/chunk-GCRJFCUZ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
import { Te } from "./chunk_iq.js";
const Yf = e(b(), 1);
const YS = e(_a(), 1);
export const JA = class JA extends Yf.Component {
    static get propTypes() {
        return {
            src: YS.default.string.isRequired,
            title: YS.default.string,
            setCharIndex: YS.default.func.isRequired
        };
    }
    constructor(){
        super();
        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.audio = new Audio;
    }
    play(t) {
        t.stopPropagation();
        t.preventDefault();
        let { src } = this.props;
        if (this.audio.src !== src) {
            this.audio.src = src;
        }
        this.audio.play();
    }
    stop(t) {
        t.stopPropagation();
        t.preventDefault();
        this.audio.pause();
        this.audio.currentTime = 0;
    }
    render() {
        let { src, title, setCharIndex } = this.props;
        return Yf.default.createElement("span", {
            className: "audio-link"
        }, Yf.default.createElement(Te, {
            href: src
        }, setCharIndex(title || src)), Yf.default.createElement("span", {
            className: "play",
            onMouseOver: this.play,
            onMouseOut: this.stop
        }, "♬"));
    }
};
export const N1 = JA;
