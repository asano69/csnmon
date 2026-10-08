import { b, o } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
const Yz = e(b(), 1);
export const e6 = class e6 extends Yz.Component {
    constructor(){
        super();
        this._stores = [];
        this.mounted = false;
        this.onStoreChange = this.onStoreChange.bind(this);
    }
    subscribe(...t) {
        for (let r of t){
            if (!(r instanceof o)) {
                throw new Error('argument must be instance of "BaseStore"');
            }
            if (typeof this.onStoreChange !== "function") {
                throw new Error('function "onStoreChange" is not defined');
            }
            if (this._stores.includes(r)) {
                throw new Error(`"${r.constructor.name}" is already subscribed`);
            }
            this._stores.push(r);
        }
    }
    componentDidMount() {
        this.mounted = true;
        this._stores.forEach((t)=>t.addChangeListener(this.onStoreChange));
    }
    componentWillUnmount() {
        this.mounted = false;
        this._stores.forEach((t)=>t.removeChangeListener(this.onStoreChange));
    }
};
export const mt = e6;
