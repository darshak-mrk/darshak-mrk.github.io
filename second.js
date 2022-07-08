function show(){
	console.log('hello');
}
function clone(){
	var fname = document.getElementById('firstname').value;
	document.getElementById('lasttname').value = fname;
	
}

function clear(){
	document.getElementById('firstname').value = "";
	document.getElementById('lasttname').value = "";

}

function reverse(){
	var a = document.getElementById('lastname'>.value;
	document.getElementById('firstname).value = a ;
}

function swap(){
	var a = document.getElementById('firstname'>.value;
	document.getElementById('lastname'>.value = a;
	var b = document.getElementById('lastname'>.value;
	document.getElementById('firstname'>.value = b;
}