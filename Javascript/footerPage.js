//Choose to load "mentions légales" or "conditions générales"
function loadPage() {
	var idPage=getUrlVars()["idPage"];

	if ( idPage == "cg") {
		var pagetitle = "CONDITIONS G&Eacute;N&Eacute;RALES<div id='titileUnderLine'></div>";
		document.getElementById('pageTitle').innerHTML = pagetitle;
		
		var contentText = "<b>Repelibuscium</b> dolorum rendae<br>"
		+"post utes auttem renimi,<br>" 
		+"olum sequatectem<br>"
		+"et init quo quat<br>"
		+" laborum apieni dolo ex eume porest,<br><br>"
		+"occatis eaque aut<br><br>"
		+"apid et lit ea verae rerio et et reium faci dolore niatincto bea volorehendi unt, sunto quos sous rendunt lament et ut aut quia voluptibea qui ut ut venihit endanie ntest, auta nullabore pa dusaeria iligendi tendeli quiatest untum hil im ut eaturep raepero cus cus, quid esti is ?";
		document.getElementById('contentText').innerHTML = contentText;
	} 
	else if ( idPage == "ml") 
	{
		var pagetitle = "MENTIONS L&Eacute;GALES<div id='titileUnderLine'></div>";
		document.getElementById('pageTitle').innerHTML = pagetitle;
		
		var contentText = "<b>Repelibuscium</b> dolorum rendae<br>"
		+"post utes auttem renimi,<br>" 
		+"olum sequatectem<br>"
		+"et init quo quat<br>"
		+" laborum apieni dolo ex eume porest,<br><br>"
		+"occatis eaque aut<br><br>"
		+"apid et lit ea verae rerio et et reium faci dolore niatincto bea volorehendi unt, sunto quos sous rendunt lament et ut aut quia voluptibea qui ut ut venihit endanie ntest, auta nullabore pa dusaeria iligendi tendeli quiatest untum hil im ut eaturep raepero cus cus, quid esti is ?";
		document.getElementById('contentText').innerHTML = contentText;
	}
}

//read parameters from the url
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
		vars[key] = value;
	});
	return vars;
}

function changeFontColor(){
	document.getElementById('pageTitle').style.color = 'black';
	document.getElementById('contentText').style.color = 'black';
	document.getElementById('titileUnderLine').style.borderBottomColor = 'black';
}
