/*
// JavaScript code without any framework
var myImg = document.getElementById('mainContainer');
 
function myMessage() {
    alert('your message');
}
 
if(myImg.addEventListener) { //addEventListener is the standard method to add events to objects.
    myImg.addEventListener('mouseover', myMessage, false);
}
 
else if(myImg.attachEvent) { //For Internet Explorer
    myImg.attachEvent('onmouseover', myMessage);
}
 
else { //For other browsers
    myImg.onmouseover = myMessage;
}
*/


function toGreenBackground(){
	//var background=document.getElementById('mainContainer');
	document.getElementById('first').style.backgroundImage='url("Assets/backgroundGreen.png")';
	document.getElementById('plage').style.backgroundImage='url("Assets/beach.png")';
	document.getElementById('triangle').style.backgroundImage='url("Assets/triangleYellow.png")';
	document.getElementById('topLayer').style.backgroundColor='rgba(178,175,178,0.49)';
	document.getElementById('bottomLayer').style.backgroundColor='rgba(178,175,178,0.49)';
	document.getElementById('inner').style.backgroundColor='rgba(255,255,255,0.8)';
}

function toRedBackground(){
	//var background=document.getElementById('mainContainer');

	document.getElementById('first').style.backgroundImage='url("Assets/backgroundRed.png")';
	document.getElementById('plage').style.backgroundImage='url("Assets/sea.png")';
	document.getElementById('topLayer').style.backgroundColor='rgba(228,228,228,0.2)';
	document.getElementById('bottomLayer').style.backgroundColor='rgba(228,228,228,0.2)';
	document.getElementById('inner').style.backgroundColor='rgba(40,39,40,0.49)';
}