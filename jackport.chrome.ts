import JackPortAbstract from './jackport.abstract';
import { ab2str, str2ab } from "./utils";

export default class JackPortChrome extends JackPortAbstract {
    constructor(path: string) {
        super(path);
        this._messageListener = this._messageListener.bind(this);
        this._connect();
    }

    _messageListener(msg: string): void {
        // FIXME: check info and only then parse and notify.
        console.log('Got message', msg.data);
        const data = ab2str(msg.data);
        this._collectMessage(data);
    }

    _connect(): void {
        chrome.serial.connect(this._path, null, (info) => {
            this._info = info;
            console.log('Info', info);
            chrome.serial.onReceive.addListener(this._messageListener);
        })
    }

    sendMessage(message: string): void {
        chrome.serial.send(this._info.connectionId, str2ab(message)); // FIXME: add callback here.
    }
}