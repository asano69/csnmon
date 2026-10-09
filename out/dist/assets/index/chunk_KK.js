import { Ya, b } from "../chunks/chunk-GCRJFCUZ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
import { mt } from "./chunk_Yz.js";
const KK = e(b(), 1);
export const kI = class kI extends mt {
    constructor(){
        super();
        this.state = {
            show: false
        };
        this.subscribe(Ya.Selection);
    }
    onStoreChange() {
        let show = Ya.Selection.hasSelection();
        this.setState({
            show
        });
    }
    render() {
        if (this.state.show) {
            return KK.default.createElement("div", {
                id: "touch-layer",
                className: "touch-layer"
            });
        }
        return null;
    }
};
export const R1 = kI;
