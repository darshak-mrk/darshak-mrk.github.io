//circle calculation
function carea(){
	var c1 = document.getElementById('v1').value; 
	var a = 3.14 * c1 * c1;
    document.getElementById('v3').value = a;
}

function cperimeter(){
	var c1 = document.getElementById('v1').value; 
	var p = 2 * 3.14 * c1;
    document.getElementById('v3').value = p;
}

//cylinder calculation
function cylindervolume(){
	var c1 = document.getElementById('v1').value; 
	var c2 = document.getElementById('v2').value; 
	var v = 3.14 * c1 * c1 * c2;
    document.getElementById('v3').value = v;
}

//square calculation
function sarea(){
	var s1 = document.getElementById('v4').value; 
	var a = s1 * s1;
    document.getElementById('v6').value = a;
}

function sperimeter(){
	var s1 = document.getElementById('v4').value; 
	var p = 4 * s1;
    document.getElementById('v6').value = p;
}

//rectangle calculation
function rectanglearea(){
	var a1 = document.getElementById('v4').value;
	var a2 = document.getElementById('v5').value;
	var a = a1 * a2;
    document.getElementById('v6').value = a;
}

function rectangleperimeter(){
	var a1 = document.getElementById('v4').value;
	var a2 = document.getElementById('v5').value;
	var p = 2 * a1 + 2 * a2;
    document.getElementById('v6').value = p;
}

