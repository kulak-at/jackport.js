import JackPortAbstract from './jackport.abstract';

let SerialPort = null;
import { ab2str }from './utils';

export default class JackPortNode extends JackPortAbstract {
    constructor(path: string) {
        super(path);
        SerialPort = require('serialport');
        this._connect();
    }

    _connect(): void {
        this._port = new SerialPort(this._path);

        this._port.on('data', (binData) => {
            const data = ab2str(binData);
            this._collectMessage(data);
        })
    }

    sendMessage(message: string): void {
        this._port.write(message);
    }
}