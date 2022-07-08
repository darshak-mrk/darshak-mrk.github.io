function add(){
	var v1=document.getElementById('value1').value;
	var v2=document.getElementById('value2').value;
	var sum = parseInt(v1)+ parseInt(v2);
	document.getElementById('value3').value=sum;
}

function sub(){
	var v1=document.getElementById('value1').value;
	var v2=document.getElementById('value2').value;
	var sub = parseInt(v1) - parseInt(v2);
	document.getElementById('value3').value=sub;
}

function multiply(){
	var v1=document.getElementById('value1').value;
	var v2=document.getElementById('value2').value;
	var multiplication = parseInt(v1)* parseInt(v2);
	document.getElementById('value3').value=multiplication;
}

function divide(){
	var v1=document.getElementById('value1').value;
	var v2=document.getElementById('value2').value;
	var division = parseInt(v1) / parseInt(v2);
	document.getElementById('value3').value=division;
}