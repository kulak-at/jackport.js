import {JackPortChrome} from "./jackport.chrome.js";
import JackPortNode from "./jackport.node.js";

let JackPort = JackPortNode;

try {
    chrome && chrome.serial;
    JackPort = JackPortChrome;
} catch(e) {
}

export default JackPort;