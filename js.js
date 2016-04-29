window.onload = function(){


	var output = document.getElementById("output");
	output.innerHTML = myNonClosure();


	window.setTimeout(function(){
			output.innerHTML += '<br/>' + myNonClosure();
		}, 500);   //after 500 sec...creating new date object on every call..to prove



	function myNonClosure(){
		var date = new Date();
		return date.getMilliseconds();
	}
}