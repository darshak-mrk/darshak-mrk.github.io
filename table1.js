function f1(){
	var a=document.getElementById('t1').value;
	document.getElementById('s1').textContent ='Hi '+a;
}

function f2(){
	var x='Apple';
	x=x +'Banana';
	x=x +'Orange';
	document.getElementById('s1').textContent=x;
}

function f3(){
	var x=1;
	x= x+3;
	x++;
	x= x+ 'is my lucky number';
	document.getElementById('s1').textContent=x;
}

function f4(){
	var a= 0;
	var s='Table';
	var c = document.getElementById('t1').value;
	var d = document.getElementById('t2').value;
	for(a=1; a<=d; a++){
		s= s+ '<br>' +c+' ' +' x ' +a+ ' = ' +(c*a);
		}
	document.getElementById('s1').innerHTML=s;
	console.log(s);
}