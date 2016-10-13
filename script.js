//1
function callbackPromedio(a, b, c, callback) {
	
	var promedio=(a+b+c)/3;
	
	return callback(promedio);
}

//2
function segundero(){
	var segundo= 1;
	setInterval(function(){
		document.getElementById("titulo").innerHTML = segundo++;
	},1000);
}
segundero();