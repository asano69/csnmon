import { _a, b } from "../chunks/chunk-3PYJHPBQ.js";
import { c } from "../chunks/chunk-UCL6J5NE.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
const G2 = e(b(), 1);
const gf = e(_a(), 1);
export const i6 = class i6 extends G2.Component {
    static get defaultProps() {
        return {
            toLeft: true,
            toRight: true
        };
    }
    static get propTypes() {
        return {
            onMove: gf.default.func.isRequired,
            onTouchEnd: gf.default.func.isRequired,
            ignoreLessThanX: gf.default.number.isRequired,
            ignoreMoreThanY: gf.default.number.isRequired,
            children: gf.default.object
        };
    }
    constructor(t){
        super(t);
        c(this, "onTouchStart", "onTouchMove", "onTouchEnd");
        this.reset();
    }
    reset({ pageX, pageY } = {
        pageX: -1,
        pageY: -1
    }) {
        this.start = {
            pageX,
            pageY
        };
        this.moveX = undefined;
        this.direction = 0;
    }
    getPagePosition(t) {
        return t.changedTouches[0];
    }
    onTouchStart(t) {
        let { pageX, pageY } = this.getPagePosition(t);
        this.start.pageX = pageX;
        this.start.pageY = pageY;
    }
    onTouchMove(t) {
        let { ignoreLessThanX, ignoreMoreThanY, onMove } = this.props;
        let { pageX, pageY } = this.getPagePosition(t);
        let moveX = pageX - this.start.pageX;
        let c = pageY - this.start.pageY;
        if (!(!this.moveX && (Math.abs(moveX) < ignoreLessThanX || Math.abs(c) > ignoreMoreThanY))) {
            this.direction = moveX - this.moveX > 0 ? 1 : -1;
            this.moveX = moveX;
            onMove({
                moveX
            });
        }
    }
    onTouchEnd() {
        let { onTouchEnd } = this.props;
        if (this.moveX !== undefined) {
            onTouchEnd({
                moveX: this.moveX,
                direction: this.direction
            });
            this.moveX = undefined;
        }
        this.reset();
    }
    render() {
        return G2.default.createElement("div", {
            className: "swipe-event",
            onTouchStart: this.onTouchStart,
            onTouchMove: this.onTouchMove,
            onTouchEnd: this.onTouchEnd
        }, this.props.children);
    }
};
