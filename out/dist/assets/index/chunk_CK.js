import { Ga, Ya, _a, b } from "../chunks/chunk-GCRJFCUZ.js";
import { c } from "../chunks/chunk-UCL6J5NE.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
import { mt } from "./chunk_Yz.js";
const CK = e(b(), 1);
const tx = e(_a(), 1);
const AK = e(Ga(), 1);
export const hI = class hI extends mt {
    constructor(t){
        super(t);
        this.state = {
            widths: []
        };
        c(this, "applyColWidths");
        this.subscribe(Ya.TableBlock);
    }
    static get propTypes() {
        return {
            tableId: tx.default.string.isRequired,
            indent: tx.default.number.isRequired,
            isCursorLine: tx.default.bool.isRequired
        };
    }
    applyColWidths() {
        let { tableId } = this.props;
        let colWidths = Ya.TableBlock.getTable(tableId).colWidths;
        this.setState({
            widths: colWidths
        });
    }
    onStoreChange({ store, event }) {
        let { tableId } = this.props;
        switch(store){
            case Ya.TableBlock:
                {
                    if (event.tableId !== tableId) {
                        break;
                    }
                    this.applyColWidths();
                    if (event.forceUpdate) {
                        this.forceUpdate();
                    }
                    break;
                }
        }
    }
    shouldComponentUpdate(t, r) {
        let { indent, isCursorLine } = this.props;
        if (indent !== t.indent) {
            return true;
        }
        return !(isCursorLine || AK.default(this.state.widths, r.widths) || !isCursorLine && t.isCursorLine);
    }
    componentDidUpdate() {
        Ya.LineDOM.update();
    }
    render() {
        let { tableId } = this.props;
        let { widths } = this.state;
        if (!widths) {
            return null;
        }
        let n = [];
        for(let o = 1; o <= widths.length; o++){
            let width = widths[o];
            if (!width || width < 0) {
                continue;
            }
            let a = `.col-${o}[data-table-id='${tableId}'] { min-width: ${width}px; }`;
            n.push(a);
        }
        return CK.default.createElement("style", null, n.join(`
`));
    }
};
export const F1 = hI;
export const vI = e(b(), 1);
