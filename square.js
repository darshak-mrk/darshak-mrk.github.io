function areaperimeter (){
	var v1 = document.getElementById('value1').value;
	var area = parseInt(v1) * parseInt(v1);
	var perimeter = 4 * parseInt(v1);
	document.getElementById('value2').value = area;
	document.getElementById('value3').value = perimeter;
}