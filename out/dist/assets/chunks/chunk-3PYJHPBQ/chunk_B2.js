const B2 = (()=>{
    let t = new Uint32Array(256);
    for(let e = 0; e < 256; e++){
        let r = e;
        for(let n = 0; n < 8; n++){
            r = r & 1 ? 3988292384 ^ r >>> 1 : r >>> 1;
        }
        t[e] = r;
    }
    return t;
})();
export function U2(t) {
    let e = 4294967295;
    for (let r of t){
        e = B2[(e ^ r) & 255] ^ e >>> 8;
    }
    return (e ^ 4294967295) >>> 0;
}
