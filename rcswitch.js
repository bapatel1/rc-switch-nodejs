var rcswitch = require('rcswitch');

var pin = 27;



var rcswitch = require('rcswitch'); // Might throw an error if wiring pi init failed, or exit process if no root (must work on that)

rcswitch.enableTransmit(0); // Use data Pin 0
rcswitch.send(4199875);
console.log("rcswitch running...");
