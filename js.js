


	//function exp ..so moved to top..so that this will be called..
	var myClosure2 = function(){   //encapsulating date and mynestedFun in the myClosure2 container
		var date  = new Date();

		var myNestedFunc = function(){   //this fn is private..
			console.log("inside");
			return date.getMilliseconds();
		};
		//to fix the above private fn
		return {
			foo : myNestedFunc    ///the revealing module pattern..to make a way to get to the myNestedFunc
			///date object is being preserved in memory..
		};
	};



	var output = document.getElementById("output");

	var closure = myClosure2();  ///without new..not seeing any difference..
	output.innerHTML = closure.foo();  //you get closure.myNestedFunc is not a function


	window.setTimeout(function(){
			output.innerHTML += '<br/>' + closure.foo();
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


///remember I removed window.onload...removing that makes  Cannot set property 'innerHTML' of null  depending upon where this JS file exists in the HTML Doc - very imp