
///why u need to JS patterns...
/////code in a way that leverages much reuse as poosible...
////promote maintenaice of code...
/////debug and other team members might to debug them..

////large of JS api canvas, geolocation....etc...
////amount of API going to HTML is increated..

///how we avoid naming conflicts...
////when you combine that code with your code...how do you make sure..we have no conflicts....with external libreary..


1) function Spaghetti code...
bad way..there is a better way...to do it....

how to encapsulate in closures...much in the same way as classes ...

Defining variables...different ways...


1) spaghetti code....

problems....variables , fns added into global scoep...global scope..one collection area...
potential for duplicate function names 

it is not modular at alll..

no sense of a container....the file itself is a container...which is bad...

function that is conflicted with another function...which fn will be executed in the order of the script files...


this shit is the function spaghetti code...

so we need to put that shit in closures....to eliminate spaghetti code...

encapsulate and add modules to your javascript code...


closure - an inner function always has access to the vars and aprameters of its outer function, even after the outer function has returned...

you can nest functions, if you do that- changes the visibility...

////closures provide encapsulation...........

prototype pattern ====

leverage prototyping functionality///

pro --- leverage js built in features, 
modularize your code nto reusabel objects..

variables/fns taken out of glbal namespace..

functions loaded into memory once..100 objects - share all those 40 funcs in memery......

possible to override functison through prototyping....may be override parts of other library...some dude....

cons -  "uses this" - can be tricky...
have to deal with two parts...
Constructor separate from prototype definition...(2 parts - constructor and prototype)

---------------------------Douglas Crockford ....


return 
{

}
//the first one is a silent error...bad parts of JS is automatical semicolon insertion...


return {

}

JS has function scope not block scope...

//this i will be hoisted to the top of the function..
for (var i =0 ; )

	let there be let... let does not hoist...


var a = b=0;

var a =0, b=0;


it will be 

b=0;

var a=b;

implicitly global variables...

-------Numbers in Javascript - Douglas...

one numner type -- 64 bit floating point --- aka Doouble...

no integer types, ...


-----NAN 

not a number...result of undefined or erroneous ..typeof NAN - number...

NaN is not equal to anything, including NaN...

Strings are immutable...if you want to change a string , you need to create a new string..you can use single or double quotes..

value from a form is always a astring...
Number(str)

Array ---- Array inherits from Objects...

The dot notation should not be used with arrays...

sort does it with string when dealing with numbers...


delete will leave a hole in the array..so use splice to prevent holes and splice does reordering..
in js associative array is an object...

typeof null is object..
typeof array is also object...

Array.isArray

Falsy values -- will yield false..in if conditions..


false, null, undefined.... "" , 0 NaN

All other values are truthy..
 stirng "0" and "false" is truthy...


 JS is a Loosely typed..

Objects can be passed as arguments to functions...Objects are passed by reference...the ==== operator compares reference..means same object...

in js blocks do not have any scope




this parameter contains a reference to the object of invocation..




