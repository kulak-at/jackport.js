const JackPort = require('../../dist/jackport.js');

const serial = new JackPort('/dev/ttyACM0');

serial.onMessage((msg) => {
    console.log('got message on the outside', msg);
});