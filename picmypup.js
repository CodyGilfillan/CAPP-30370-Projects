function makeCanvas(){

var canvas4 = document.getElementById('canvas4');
var ctx4 = canvas4.getContext('2d');

ctx4.fillStyle = "blue";
	
	ctx4.beginPath();
	ctx4.arc(20,20, 20, 20, Math.PI * 2);
	ctx4.fill();
	ctx3.closePath();
	
	}