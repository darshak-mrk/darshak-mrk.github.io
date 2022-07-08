function copy(){
	var fname = document.getElementById('firstname').value;
	document.getElementById('lastname').value=fname;
}

function swap(){
	var a = document.getElementById('firstname').value;
	var b = document.getElementById('lastname').value;
	document.getElementById('lastname').value= a;
	document.getElementById('firstname').value=b;
}