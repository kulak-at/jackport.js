import JackPortChrome from "./jackport.chrome";
import JackPortNode from "./jackport.node";

let JackPort = JackPortNode;

try {
    chrome && chrome.serial;
    JackPort = JackPortChrome;
} catch(e) {
}

export default JackPort;