import { _a, b } from "../chunks/chunk-3PYJHPBQ.js";
import { c } from "../chunks/chunk-UCL6J5NE.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
export const Qp = e(b(), 1);
export const QY = e(_a(), 1);
const ev = e(b(), 1);
const XI = e(_a(), 1);
export function QI({ children }) {
    if (!(children instanceof Array)) {
        children = [
            children
        ];
    }
    let t = null;
    for (let r of children.reverse()){
        let { content, loading } = r;
        if (!content) {
            content = r;
        }
        t = ev.default.createElement(ZI, {
            loading
        }, content, t);
    }
    return t;
}
export const e8 = class e8 extends ev.Component {
    static get propTypes() {
        return {
            children: XI.default.any.isRequired,
            loading: XI.default.any
        };
    }
    constructor(){
        super();
        this.state = {
            show: false
        };
        c(this, "checkScroll");
    }
    checkScroll() {
        if (!this.dom) {
            return;
        }
        let show = window.scrollY + window.innerHeight * 1.1 > this.dom.offsetTop;
        this.setState({
            show
        });
    }
    componentDidMount() {
        this.checkInterval = setInterval(this.checkScroll, 300);
        requestAnimationFrame(this.checkScroll);
    }
    componentWillUnmount() {
        clearInterval(this.checkInterval);
    }
    render() {
        let { show } = this.state;
        let { children, loading } = this.props;
        return ev.default.createElement("div", {
            className: "lazy-render",
            ref: (o)=>{
                this.dom = o;
            }
        }, show ? children : loading);
    }
};
var ZI = e8;
