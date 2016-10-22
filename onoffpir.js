var Gpio = require('onoff').Gpio,
  //buzzer = new Gpio(18, 'out'),
  pir = new Gpio(22, 'in', 'both');
 
pir.watch(function(err, value) {
  if (err) exit();
  //buzzer.writeSync(value);
 // console.log('PIR resting now!');
  if(value == 1)
	//  require('./mailer').sendEmail();
	console.log('ALARM : Intruder here!	'+ new Date() );
 // console.log('PIR Resting Now!');
});
 
//console.log('Pi Bot deployed successfully!');
//console.log('Guarding the Magic pencil...');
 
function exit() {
 // buzzer.unexport();
  pir.unexport();
  process.exit();
}
