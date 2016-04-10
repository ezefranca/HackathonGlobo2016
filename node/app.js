var SerialPort = require("serialport").SerialPort;
var serialport = new SerialPort("/dev/tty.usbmodem1421");
serialport.on('open', function(){
	console.log('Serial Port Opend');
	serialport.on('data', function(data){
		if(data[0] == 0){
			console.log("ZERO");
		}else {
			console.log("UM");
			var robot = require("robotjs");
			
			//robot.keyTap("enter");
		}
		//console.log(data[0]);
	});
});


