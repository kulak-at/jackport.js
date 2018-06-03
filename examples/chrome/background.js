import JackPort from '../../jackport.js';

const port = new JackPort('/dev/ttyACM0');

port.onMessage((data) => {
    console.log('Internal message', data);
});