export const ab2str = function(buf) {
    const bufView = new Uint8Array(buf);
    const encodedString = String.fromCharCode.apply(null, bufView);
    return decodeURIComponent(escape(encodedString));
};

export const str2ab = function(str) {
    const buf = new ArrayBuffer(str.length * 2);
    const bufView = new Uint16Array(buf);
    for(let i=0; i < str.length; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
};