function f1(){
	document.getElementById('t1').value = "Hello";
}

function f2(){
	var obj1 = {"Id":"01", "Product":"Mobile", "Price":"10000", "Quantity":"01"};
	var obj2 =  {"Id":"02", "Product":"TV", "Price":"10000", "Quantity":"01"};
	document.getElementById('order').value= obj1.Id;
	document.getElementById('Product').value= obj1.Product;
	document.getElementById('Quantity').value= obj1.Quantity;
	document.getElementById('Price').value= obj1.Price;
}

function f3(){
	document.getElementById('order').value= '';
	document.getElementById('Product').value= '';
	document.getElementById('Quantity').value= '';
	document.getElementById('Price').value= '';
}

function f4(){
	var obj1 = [
	    {"Id":"01", "Product":"Mobile", "Price":"10000", "Quantity":"02"}, 
	    {"Id":"02", "Product":"TV", "Price":"50000", "Quantity":"01"},
	    {"Id":"03", "Product":"Washing Machine", "Price":"15000", "Quantity":"01"}
	];
	var order = document.getElementById('t1').value;
	if(order ==''){
		document.getElementById('sp').textContent = 'Enter Order Id';
		return;
	}
	else{
		document.getElementById('sp').textContent = '';
	}
    var tempobj = obj1[order];
	document.getElementById('order').value = tempobj.Id; 
	document.getElementById('Product').value = tempobj.Product;
	document.getElementById('Quantity').value = tempobj.Quantity ;
	document.getElementById('Price').value = tempobj.Price ;
	document.getElementById('Total').value = tempobj.Quantity * tempobj.Price;
}