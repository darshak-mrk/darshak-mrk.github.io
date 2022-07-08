function Simpleinterest(){
	var p = document.getElementById('value1').value;
	var n = document.getElementById('value2').value;
	var r = document.getElementById('value3').value;
	var si = parseInt(p) * parseInt(n) * parseInt(r) /100;
	document.getElementById('value4').value= si;
}