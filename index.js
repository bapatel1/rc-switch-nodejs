//https://www.npmjs.com/package/rpi-433
var rpi433    = require('rpi-433');
// initialize rpi-433 module
var rfSniffer = rpi433.sniffer(2, 500); //Snif on PIN 2 with a 500ms debounce delay
var rfSend    = rpi433.sendCode;

rfSniffer.on('codes', function(data){
  // TODO - need to analyzie and parse data
  // callback(...); // gotta return JSON data
  console.log(data);
});
