# JackPort.js
JackPort.js is a JavaScript library for handling Serial Port in **both Node.js and Chrome Apps**.

## Motivation
Chrome implementation and Node.js implementation (serialport library) differs. It is hard to write a module that will use Serial Port to work both on Node.js and in Chrome. This library is a first step in unifying these two experiences. It provides minimalistic set of functionality good for small project.

## Installation
NPM:
```bash
npm install jackport.js --save
```
Yarn:
```bash
yarn add jackport.js
```

## Usage
The library exposes single object for subscribing / sending data to Serial Port. Based on the platform it will be resolved to either Node or Chrome implementation.

### Methods

```
constructor(path: string)
```
To create a new JackPort object, provide the path to the device (for example `/dev/ttyACM0`. If you are connecting with Arduino, you will find your device name at the bottom right corner of your Arduino IDE.)



```
onMessage(fn: (msg: string): void): void
```
Subscribes to messages sent on the Serial bus. The library waits for the separator `\r\n` and splits the messages accordingly.

```
offMessage(fn: (msg: string): void): void
```
Unsubscribes. The same instance of the function should be passed here as for the subscription.

```
sendMessage(msg: string): void
```
Sends the message over the bus.

### Examples
You can find simple examples in [Examples](./examples) directory.

## License
Library is released under MIT license.

## References and attribution
<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>