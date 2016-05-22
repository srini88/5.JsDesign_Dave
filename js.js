
function srini(){
	var foo = {n: 1};
	var bar = foo;  //bar and foo point to the same thing..
	foo.x = foo = {n: 2};  //foo={n:2} destroying old address..makes it completely new address
	

	//foo.x = foo;   //
	console.log("here" , foo.x);
	//foo ={n : 2};   //but here it destroys and completely creates a new object..

	console.log("after", foo);  //only  {n:2}  and no foo.x...

	console.log(foo.x);   //undefined...
	console.log("bar",bar);

	console.log(bar.x)   //object {n:2}
	console.log(foo);



}

srini();





