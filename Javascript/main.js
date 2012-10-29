//Night=>Day
function toGreenBackground() {
	document.getElementById('first').style.backgroundImage = 'url("Assets/backgroundGreen.png")';
	document.getElementById('plage').style.backgroundImage = 'url("Assets/beach.png")';
	document.getElementById('triangle').style.backgroundImage = 'url("Assets/triangleYellow.png")';
	document.getElementById('topLayer').style.backgroundColor = 'rgba(178,175,178,0.49)';
	document.getElementById('bottomLayer').style.backgroundColor = 'rgba(178,175,178,0.49)';
	document.getElementById('inner').style.backgroundColor = 'rgba(255,255,255,0.8)';
	document.getElementById('palmierGauche').style.backgroundImage = 'url("Assets/palmLeftCocoHided.png")';
	document.getElementById('palmierDroit').style.backgroundImage = 'url("Assets/palmRightCocoHided.png")';
}

//Handle click once and twice
function displayBlocDetails(blockNumber) {
	var blockDetailsId = "bloc" + blockNumber + "Details";
	var blocDetails = document.getElementById(blockDetailsId);
	switch (blockNumber) {
	case 1:
		if (document.getElementsByClassName('bloc2')[0].style.display == 'none') {
			window.location = "detailPage.html";
		} else {
			blocDetails.style.display = 'block';
			document.getElementsByClassName('bloc2')[0].style.display = 'none';
		}
		break;
	case 2:
		if (document.getElementsByClassName('bloc1')[0].style.display == 'none') {
			window.location = "detailPage.html";
		} else {
			blocDetails.style.display = 'block';
			document.getElementsByClassName('bloc1')[0].style.display = 'none';
		}
		break;
	case 3:
		if (document.getElementsByClassName('bloc4')[0].style.display == 'none') {
			window.location = "detailPage.html";
		} else {
			blocDetails.style.display = 'block';
			document.getElementsByClassName('bloc4')[0].style.display = 'none';
		}
		break;
	case 4:
		if (document.getElementsByClassName('bloc3')[0].style.display == 'none') {
			window.location = "detailPage.html";
		} else {
			blocDetails.style.display = 'block';
			document.getElementsByClassName('bloc3')[0].style.display = 'none';
		}
		break;
	default:
		break;
	}
}

//Hide the detail info when clicked
function hideBlocDetails(blockNumber) {
	for (var i = 1; i <= 4; i++) {
		var blocClass = "bloc" + i;
		document.getElementsByClassName(blocClass)[0].style.display = 'block';
	}
	var blockDetailsId = "bloc" + blockNumber + "Details";
	document.getElementById(blockDetailsId).style.display = 'none';
}