function volume (){
	var v1 = document.getElementById('value1').value;
	var v2 = document.getElementById('value2').value;
	var volume = 3.14 * parseInt(v1) * parseInt(v1) * parseInt(v2);
	document.getElementById('value3').value = volume;
	
}