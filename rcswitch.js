var rcswitch = require('rcswitch');

var pin = 27;



var rcswitch = require('rcswitch'); // Might throw an error if wiring pi init failed, or exit process if no root (must work on that)

rcswitch.enableTransmit(0); // Use data Pin 0
rcswitch.switchOn("10110", 1); // Switch on the first unit of 10110 (code 1x23x) group
rcswitch.switchOff("11000", 2); // Switch off the second unit of 11000 (code 12xxx) group


if(rcswitch.enableReceive(pin)) {
  setInterval(function() {
      if (rcswitch.available()) {
          console.log(rcswitch.getReceivedValue());
          rcswitch.resetAvailable();
      }
  }, 1000);
}

console.log("rcswitch running...");

