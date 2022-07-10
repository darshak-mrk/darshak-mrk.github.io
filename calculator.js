function add(){
	var a1 = document.getElementById('v1').value;
	var a2 = document.getElementById('v2').value;
	var sum = parseInt(a1) + parseInt(a2);
	document.getElementById('v3').value = sum;
}

function sub(){
	var s1 = document.getElementById('v1').value;
	var s2 = document.getElementById('v2').value;
	var sub = parseInt(s1) - parseInt(s2);
	document.getElementById('v3').value = sub;
}

function div(){
	var d1 = document.getElementById('v1').value;
	var d2 = document.getElementById('v2').value;
	var div = parseInt(d1) / parseInt(d2);
	document.getElementById('v3').value = div;
}

function multi(){
	var m1 = document.getElementById('v1').value;
	var m2 = document.getElementById('v2').value;
	var multi = parseInt(m1) * parseInt(m2) ;
	document.getElementById('v3').value = multi;
}


function si(){
	var p = document.getElementById('v4').value;
	var n = document.getElementById('v5').value;
	var r = document.getElementById('v6').value;
	var si = parseInt(p) * parseInt(n)* parseInt(r) / 100;
	document.getElementById('v7').value = si;
}

function ci(){
	var p = document.getElementById('v4').value;
	var n = document.getElementById('v5').value;
	var r = document.getElementById('v6').value;
	var ta = parseInt ( p * ( Math.pow((1+ r/100),n)));
	var ci = parseInt (ta) - parseInt(p);
	document.getElementById('v8').value = ci;
}

