function f1(){
	var counter = 0;
	var v1 = [ 'Apple', 'Banana', 'Orange', 'Mango'];
	document.getElementById('t1').value = v1[counter];
	counter = counter + 1;
	document.getElementById('t1').value = v1[counter];
	counter = counter +1;
	document.getElementById('t1').value = v1[counter];
	counter = counter +1;
	document.getElementById('t1').value = v1[counter];
	
}


var counter = 0;
function f2(){
	var v1 = [ 'Apple', 'Banana', 'Orange', 'Mango'];
	var len = v1.length;
	document.getElementById('t1').value = v1[counter];
	counter++;
	
}

var counter = 0;
function f3(){
	var v1 = [ 'Apple', 'Banana', 'Orange', 'Mango'];
	document.getElementById('t1').value = v1[counter];
	counter++;
	counter %= v1.length;
	v1.innerHTML = v1[counter];
	
	
}


function f4(){
	var v1 = [ 'Apple', 'Banana', 'Orange', 'Mango'];
	document.getElementById('t1').value = v1[counter];
	counter--;
	counter %= v1.length;
	v1.innerHTML = v1[counter];
	
}