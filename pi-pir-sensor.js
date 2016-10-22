var Sensor = require('pi-pir-sensor');
var sensor = new Sensor({
    // pin number must be specified 
    pin: 15,
 
    // loop time to check PIR sensor, defaults to 1.5 seconds 
    loop: 1500
});
 
sensor.on('movement', function () {
    // who's there?
	console.log('Somehing happen! Intruder alarm.'); 
});
 
sensor.start();
