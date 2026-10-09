import { b, x } from "../chunks/chunk-GCRJFCUZ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const k1 = e(b(), 1);
export function YA({ fileId, originalPixelRatio, displayPixelRatio, onUpdate }) {
    let [o, setO] = k1.useState(false);
    return k1.default.createElement("button", {
        className: "btn btn-primary pixel-ratio-toggle-button",
        disabled: o,
        onClick: a(async (c)=>{
            c.preventDefault();
            c.stopPropagation();
            setO(true);
            let displayPixelRatio_1 = displayPixelRatio === originalPixelRatio ? 1 : originalPixelRatio;
            try {
                await x.post(`/api/gcs/${fileId}/pixel-ratio`, {
                    displayPixelRatio: displayPixelRatio_1
                });
                onUpdate(displayPixelRatio_1);
            } catch (error) {
                console.error(error);
            }
            setO(false);
        }, "onClick")
    }, "Pixel Ratio", " ", displayPixelRatio === originalPixelRatio ? `${originalPixelRatio}x \u2192 1x` : `1x \u2192 ${originalPixelRatio}x`, o ? k1.default.createElement("i", {
        className: "fa fa-spinner"
    }) : null);
}
