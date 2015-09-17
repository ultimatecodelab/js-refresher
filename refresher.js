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