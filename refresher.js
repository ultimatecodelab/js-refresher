var a = 1;
var b = "Hello, world!";
var c = 1.234;
var d = null;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

function test1(x, y) {
	return (x + y) * (x - y);
}

console.log(test1(2, 3));

var test2 = function(x, y) {
	return (x + y) / (x - y);
}

console.log(test2(2, 3));

var car = {
	make: "Skoda"
	, model: "Octavia"
};

console.log("The car is a " + car.make + " " + car.model + ".");

var van = {
	make: "Ford"
	, model: "Transit"
	, full_name: function() {
		return this.make + " " + this.model;
	}
};

console.log("The van is a " + van.full_name() + 	".");

var numbers = [1,2,3,4];

for (var i = 0; i < numbers.length; i++) {
	console.log(i * i);
}

if (1 < 2) {
	console.log("The world is OK.");
} else {
	console.log("The world is not OK.");
}


//Create a function in refresher.js that takes a single integer argument, squares it, adds two, and returns that value (x -> x^2 + 2). 
//Test that the function works by applying it to the value 8 and outputting the result to the console.
var squareResults = function(num)
{
	var result = (num*num) + 2;
	return result;
}
//testing the above function
console.log(squareResults(8));

//Create an array of the even numbers from 1 to 60.

var testArr = [];

for(var i = 0 ; i<=60;i++)
{
	testArr.push(i);
}
//testing the array stuff
printArrayContents(testArr);
function printArrayContents(arrayStuffs)
{
	console.log("printing array contents :" + arrayStuffs);
}
console.log("Printed the numbers");

//Create an object called connection that has two properties: ip_address and port.
var connection = { ip_address :"", port:"", changePort : function (portNum) {
					 this.port=portNum;
					}
				};

//add a method to the object called change_port() that takes a single argument, a port number, and changes the port property to that value.
console.log("Port is: " + connection.port);
var changePort = connection.changePort(12345);
console.log(connection.port);
console.log("Port has been changed");

//Random r = new Random();
var ip_address = function generate_ip_address(howMany)
{
	var ip_add_Arr = [];
	for (var i=0; i<howMany ; i++){
		var ip_add= Math.floor((Math.random() * 100) + 1) + "." + 
					Math.floor((Math.random() * 100) + 1) + "." + 
					Math.floor((Math.random() * 100) + 1) + "." +
					Math.floor((Math.random() * 100) + 1) ;

					ip_add_Arr.push(ip_add);
	}
	return ip_add_Arr;

}
//printing the ip_address
console.log(ip_address(100));
