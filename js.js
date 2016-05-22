
function srini(){
	// var foo = {n: 1};
	// var bar = foo;  //bar and foo point to the same thing..
	// foo.x = foo = {n: 2};
	// console.log(foo);

	var b=2;

	var a=b=5;


}

srini();
console.log(b);  //b is not defined...b wont be global this time...since var b is there already...apply this thing to foo




