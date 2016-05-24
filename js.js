// var digit_name = function (n){
// 	var names = ['zero', 'one', 'two', 'three'];  //creating an array just to return one thing...will run bit slow..

// 	return names[n];
// }

// console.log(digit_name(3));  //you get three...


//best way to do is with closure..


var digit_name = (function (n){
	console.log("ni")  //prins this
	var names = ['zero', 'one', 'two', 'three'];  //creating an array just to return one thing...will run bit slow..

	return names[n];
	console.log("b")
})();

//console.log(digit_name(3)); 