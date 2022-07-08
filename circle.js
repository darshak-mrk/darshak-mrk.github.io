function areaperimeter(){
	console.log('hr');
	var v1 =document.getElementById('num1').value;
	var area = 3.14 * parseInt(v1) * parseInt(v1);
	var perimeter = 2 * 3.14 * parseInt(v1);
	document.getElementById('num2').value = area;
	document.getElementById('num3').value = perimeter;
	console.log('hr');
	
}