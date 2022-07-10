function copy(){
    var fn = document.getElementById('name1').value;
	document.getElementById('name2').value= fn;
	
}

function swap(){
    var fn = document.getElementById('name1').value;
	var ln = document.getElementById('name2').value;
	document.getElementById('name2').value= fn;
	document.getElementById('name1').value= ln;
	
}

function clearinput(){
    document.getElementById('name1').value= "";
	document.getElementById('name2').value= "";
	
}

function sort(){
	var fn = document.getElementById('name1').value;
	var ln = document.getElementById('name2').value;
	if(ln.length>fn.length){
		document.getElementById('name1').value=ln;
		document.getElementById('name2').value=fn
		
	}
}

function sortascending(){
	var fn = document.getElementById('name1').value;
	var ln = document.getElementById('name2').value;
	if(fn.length>ln.length){
		document.getElementById('name1').value=ln;
		document.getElementById('name2').value=fn;
		
	}
	
	
}