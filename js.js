function myNonClosure (){

	var date = new Date();
	return date.getMilliseconds();
}  //hwhen we return date.getmil = this date variable is gone..

console.log(myNonClosure());   //this shit is not a closre


//we want the date variable to even stick around, we got to use closure...