function loadPage() {
	var idPage=getUrlVars()["idPage"];

	if ( idPage == "cg") {
		var pagetitle = "CONDITIONS G&Eacute;N&Eacute;RALES<div class='underLine'></div>";
		document.getElementsByClassName('pagetitle')[0].innerHTML = pagetitle;
		
		var contentText = "Repelibuscium dolorum rendae post utes autem renimi, olum seq<br>" + "Lorem ipsum dolor sit amet, fastidii pericula honestatis quo ne, ad eos magna patrioque sadipscing. Ei quo brute utamur torquatos, nec iuvaret eligendi efficiantur ei, eu causae neglegentur voluptatibus vel. Id noster audire scripta mei. Quo no veri graeci dolores. Putant fierent blandit an sea. No vis splendide consectetuer. Id commune omnesque petentium mei, eam phaedrum honestatis te.<br><br>" + "Cetero corpora intellegebat cum ei. Equidem fuisset ea vix. Malorum intellegat accommodare cu eum, ad tritani utroque incorrupte sit, vel quis graeco omittam in. Vel purto voluptaria deseruisse ut. Dicta sententiae sea id, congue dicant maiorum no qui. Vim id iudicabit constituam deterruisset.<br><br>" + "Probo ocurreret interpretaris cu sea, ei est choro vivendum referrentur. Te stet diceret suscipit eam, unum soluta latine in mel. Dicant laoreet mediocrem ut pri, est ne nibh intellegam dissentiet. Usu modus mazim ornatus cu, et feugiat omnesque vim.<br>" + "Aeque probatus cum id, id eum sint tacimates, ex vis fuisset apeirian rationibus. No quo nobis eirmod deserunt, mel solet delicatissimi no, fabulas ponderum definiebas ex pro. Ornatus epicuri pro ex. Sit at putant legendos. Lobortis dissentias conclusionemque sed ea.";
		document.getElementsByClassName('contentText')[0].innerHTML = contentText;
	} 
	else if ( idPage == "ml") 
	{
		var pagetitle = "MENTIONS L&Eacute;GALES<div class='underLine'></div>";
		document.getElementsByClassName('pagetitle')[0].innerHTML = pagetitle;
		
		var contentText = "Repelibuscium dolorum rendae post utes autem renimi, olum seq<br>" + "Lorem ipsum dolor sit amet, fastidii pericula honestatis quo ne, ad eos magna patrioque sadipscing. Ei quo brute utamur torquatos, nec iuvaret eligendi efficiantur ei, eu causae neglegentur voluptatibus vel. Id noster audire scripta mei. Quo no veri graeci dolores. Putant fierent blandit an sea. No vis splendide consectetuer. Id commune omnesque petentium mei, eam phaedrum honestatis te.<br><br>" + "Cetero corpora intellegebat cum ei. Equidem fuisset ea vix. Malorum intellegat accommodare cu eum, ad tritani utroque incorrupte sit, vel quis graeco omittam in. Vel purto voluptaria deseruisse ut. Dicta sententiae sea id, congue dicant maiorum no qui. Vim id iudicabit constituam deterruisset.<br><br>" + "Probo ocurreret interpretaris cu sea, ei est choro vivendum referrentur. Te stet diceret suscipit eam, unum soluta latine in mel. Dicant laoreet mediocrem ut pri, est ne nibh intellegam dissentiet. Usu modus mazim ornatus cu, et feugiat omnesque vim.<br>" + "Aeque probatus cum id, id eum sint tacimates, ex vis fuisset apeirian rationibus. No quo nobis eirmod deserunt, mel solet delicatissimi no, fabulas ponderum definiebas ex pro. Ornatus epicuri pro ex. Sit at putant legendos. Lobortis dissentias conclusionemque sed ea.";
		document.getElementsByClassName('contentText')[0].innerHTML = contentText;
	}
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
		vars[key] = value;
	});
	return vars;
}