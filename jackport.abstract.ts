const SEPARATOR = '\r\n';

type callbackFunction = (s: string) => any;

class JackPortAbstract {

    constructor(path: string) {
        this.callbacks = [];
        this._path = path;
        this._currentMessage = '';
    }

    onMessage(fn: callbackFunction): void {
        this.callbacks.push(fn);
    }

    offMessage(fn: callbackFunction): void {
        this.callbacks = this.callbacks.filter(cfn => cfn !== fn);
    }

    sendMessage(message: string): void {
        throw new Error('Not Implemented');
    }

    _broadcastMessage(message: string): void {
        this.callbacks.forEach(f => f(message));
    }

    _collectMessage(partMessage: string): void {
        this._currentMessage += partMessage;
        const parts = this._currentMessage.split(SEPARATOR);
        while(parts.length > 1) {
            this._broadcastMessage(parts.shift());
        }
        this._currentMessage = parts[0];
    }
}

export default JackPortAbstract;