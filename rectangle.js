function areaperimeter (){
	var v1 = document.getElementById('value1').value;
	var v2 = document.getElementById('value2').value;
	var area = parseInt(v1) * parseInt(v2);
	var perimeter =  2 * (parseInt(v1) + parseInt(v2));
	document.getElementById('value3').value = area;
	document.getElementById('value4').value = perimeter;
}