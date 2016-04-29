
window.onload = function(){

	//function exp ..so moved to top..so that this will be called..
	var myClosure2 = function(){   //encapsulating date and mynestedFun in the myClosure2 container
		var date  = new Date();

		var myNestedFunc = function(){
			console.log("inside");
			return date.getMilliseconds();
		}
	};




	var output = document.getElementById("output");

	var closure = new myClosure2();  ///called above..
	output.innerHTML = closure.myNestedFunc();  //you get closure.myNestedFunc is not a function


	window.setTimeout(function(){
			output.innerHTML += '<br/>' + closure.myNestedFunc();
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