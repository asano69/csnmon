import { Ya, b } from "../chunks/chunk-GCRJFCUZ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
const wp = e(b(), 1);
export function R2({ projectName, query, enabled = true, minQueryLength, debounceMs }) {
    let [results, setResults] = wp.useState([]);
    let [loading, setLoading] = wp.useState(false);
    let [updatingSearchServer, setUpdatingSearchServer] = wp.useState(false);
    let gRef = wp.useRef(null);
    wp.useEffect(()=>{
        if (!Ya.Settings.flags.ENABLE_ATLAS_VECTOR_SEARCH || !enabled || !query || query.length < minQueryLength) {
            setResults([]);
            setLoading(false);
            setUpdatingSearchServer(false);
            return;
        }
        setLoading(true);
        setResults([]);
        setUpdatingSearchServer(false);
        let b = setTimeout(async ()=>{
            gRef.current?.abort();
            let y = new AbortController;
            gRef.current = y;
            try {
                let k = await fetch(`/api/pages/${projectName}/search/vector/titles?q=${encodeURIComponent(query)}`, {
                    signal: y.signal
                });
                if (y.signal.aborted) {
                    return;
                }
                if (k.status === 490) {
                    setUpdatingSearchServer(true);
                    setResults([]);
                    setLoading(false);
                    return;
                }
                if (!k.ok) {
                    setResults([]);
                    setLoading(false);
                    return;
                }
                let _ = await k.json();
                if (y.signal.aborted) {
                    return;
                }
                setUpdatingSearchServer(false);
                setResults(_.pages || []);
                setLoading(false);
            } catch (error) {
                if (error instanceof DOMException && error.name === "AbortError") {
                    return;
                }
                setResults([]);
                setLoading(false);
            }
        }, debounceMs);
        return ()=>{
            clearTimeout(b);
            gRef.current?.abort();
        };
    }, [
        projectName,
        query,
        enabled,
        minQueryLength,
        debounceMs
    ]);
    return {
        results,
        loading,
        updatingSearchServer
    };
}
