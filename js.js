window.onload = function(){


	var output = document.getElementById("output");

	var closure = myClosure();  ///is still in scope..

	output.innerHTML = closure();




	window.setTimeout(function(){
			output.innerHTML += '<br/>' + closure();
		}, 500);   //after 500 sec...we get the same ms written out


	function myNonClosure(){
		var date = new Date();
		return date.getMilliseconds();
	}


	//classs - 
	function myClosure(){  //class def
		var date = new Date();  //closure .. date object hangs around//as long as myClosure() is in scope
		return function(){
			return date.getMilliseconds();
		};
	}
}