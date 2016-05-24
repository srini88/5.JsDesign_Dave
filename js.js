// function reverse(sentence){
// 	return sentence.split(" ").reverse().join(" ");
// }


console.log(reverse("hi my name is"))

//want-  is name my hi

function reverse(sentence){
	
	var str ='';

	for (var i=sentence.length-1 ; i >= 0; i--){
		str+=sentence[i]; 
	}
	return str;
}



var boo = "HI";
boo[1] = "e";

console.log(boo)  //cannot do in place in javascript