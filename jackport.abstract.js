const SEPARATOR = '\r\n';

class JackPortAbstract {

    constructor(path) {
        this.callbacks = [];
        this._path = path;
        this._currentMessage = '';
    }

    onMessage(fn) {
        this.callbacks.push(fn);
    }

    offMessage(fn) {
        this.callbacks = this.callbacks.filter(cfn => cfn !== fn);
    }

    sendMessage(message) {
        throw new Error('Not Implemented');
    }

    _broadcastMessage(...data) {
        this.callbacks.forEach(f => f(...data));
    }

    _collectMessage(partMessage) {
        this._currentMessage += partMessage;
        const parts = this._currentMessage.split(SEPARATOR);
        while(parts.length > 1) {
            this._broadcastMessage(parts.shift());
        }
        this._currentMessage = parts[0];
    }
}

export default JackPortAbstract;