function Select_Chancelor() {
	document.getElementById("Chancelor-dropdown").className = "verschijnen";
}

function Select_Chancelor_End() {
	var chancelor_vote = document.getElementById("Chancelor-vote").value;
	console.log(chancelor_vote);
	document.getElementById("Chancelor-dropdown").className = "verdwijnen";
	sock.emit('chancelor_vote', chancelor_vote);
}

function Select_Ja_Nein(){
	document.getElementById("Ja/Nein-dropdown").className = "verschijnen";
}
function Select_Ja_Nein_End(){
	var ja_nein_vote = document.getElementById("ja_nein_vote").value;
	console.log(ja_nein_vote);
	document.getElementById("Ja/Nein-dropdown").className = "verdwijnen";
	sock.emit('ja_nein_vote', ja_nein_vote);
}

console.log(document.getElementById("ja_nein_vote"))