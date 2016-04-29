

function myClosure(){

	var date = new Date();  //this date variable of the object sticks around..
	//nested function....this date sticks around..
	return function(){
		return date.getMilliseconds();
	}
} ///this closure allows us to create a container for our variables and our functions..

console.log(myClosure());  //you get a function here..

console.log(myClosure()());  //you get a value here...