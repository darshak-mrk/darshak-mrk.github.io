function cinterest (){
	var p = document.getElementById('value1').value;
	var r = document.getElementById('value2').value;
	var n = document.getElementById('value3').value;
	var ta = parseInt ( p * ( Math.pow((1+ r/100),n)));
	var ci = parseInt (ta) - parseInt(p);
    document.getElementById('value4').value= ta;
	document.getElementById('value5').value= ci;
}