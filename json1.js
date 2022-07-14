function f1(){
	var obj1 = { "Name": "Darshak", "Gender": "Male", "Place": "Wardha" };
	console.log(obj1.Name);
	console.log(obj1.Gender);
	console.log(obj1.Place);
}

function f2(){
	 var d = document.getElementById('s1').value;
	console.log(d);
}

function f3(){
	//var obj2 = { "FirstName": "Darshak", "LastName":"Khode," "Gender": "Male", "City": "Wardha" };
	var obj2 = { "FirstName": "Darshak", "LastName":"Khode", "Gender": "Male", "Address": {"City": "Wardha", "State":"Maharashtra", "Pincode": "442001"}};
	var e = document.getElementById('s1').value;
	
	if(e=='First Name'){
		document.getElementById('s2').textContent = obj2.FirstName;
	}
	if(e=='Last Name'){
		document.getElementById('s2').textContent = obj2.LastName;
	}
	if(e=='Gender'){
		document.getElementById('s2').textContent = obj2.Gender;
	}
	if(e=='State'){
		document.getElementById('s2').textContent = obj2.Address.State;
	}
	if(e== 'City'){
		document.getElementById('s2').textContent = obj2.Address.City;
	}
	if(e== 'Pincode'){
		document.getElementById('s2').textContent = obj2.Address.Pincode;
	}
	if(e== 'Address'){
		document.getElementById('s2').textContent = obj2.Address.City+ ',  '+obj2.Address.State+ ', ' +obj2.Address.Pincode+'.';
	}
	if(e== 'Full Information'){
		document.getElementById('s2').innerHTML = obj2.FirstName+ ' '+obj2.LastName+ ',' +'<br>' +obj2.Gender+ ',' +'<br>' +obj2.Address.City+ ', ' +obj2.Address.State+ ', ' +obj2.Address.Pincode+'.';
	}
}

