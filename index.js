//https://www.npmjs.com/package/rpi-433
var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
 var client = twilio('AC00f7cf2db0964163965f281c59d0b325', '8cfca19aafb69b43beffa22f0101b51e');
//DEV: var client = twilio('AC9818d3eb1a0e19495c48cfc2b1d33a95','7dac5e149325f5dd282058924c65f027');

var rpi433    = require('rpi-433'),
    rfSniffer = rpi433.sniffer({
      pin: 2,                     //Snif on GPIO 2 (or Physical PIN 13) 
      debounceDelay: 500          //Wait 500ms before reading another code 
    }),
    rfEmitter = rpi433.emitter({
      pin: 0,                     //Send through GPIO 0 (or Physical PIN 11) 
      pulseLength: 350            //Send the code with a 350 pulse length 
    });
 
// Receive (data is like {code: xxx, pulseLength: xxx}) 
rfSniffer.on('data', function (data) {
  console.log('Code received: '+data.code+' pulse length : '+data.pulseLength);
  if(data.code === 5592405){
    // Send the text message.
     console.log("Code Match Found. Now sending Text");
     client.sendMessage({
          to: '+18482608360',
          from: '+18482604008',
          body: 'Hello Seems like Garage Door Open!'
    });
   
    console.log("Text Sent!");
  }
});
