/*Template literal */

let word1 = 'Matt';
let word2 = 'Fyke';
let num1 = 1;
let num2 = 2;

//instead of 

const fullName = word1 + " " + word2;

//use template literal

const name = `${word1} ${word2}`;

console.log(name);

//can also do calculations in our string escaping

const numberName = `${num1+num2} ${word1} ${word2}`;

console.log(numberName);

//lines change format in template literal

let example = `${word1}
${word2}
`;

document.getElementById('example').innerText = example;

/* Destructuring Objects */

const personalInformation = {
	firstName: "Matt",
	lastName: "Fyke",
	city: "Sherman Oaks",
	state: "California",
	zipCode: 91403
}

const { firstName, lastName, city, state, zipCode } = personalInformation;

console.log(firstName);

// can also destructure even further to change the way to access the key

const { firstName:fn, lastName:ln } = personalInformation;

console.log(ln);

/* Destructuring Arrays */

let [ fName, mName, lName ] = ["Matthew", "William", "Fyke"];

mName="Shrek";

console.log(mName);

/* Object Literal */

function addressMaker(city, state) {
	const newAddress = {city, state};
	console.log(newAddress);
}

addressMaker("Sherman Oaks", "California");

/* Combination Challenge */

function newAddressMaker(address) {
	const { city, state, country } = address;
	const newAddress = {city, state, country};
	console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

newAddressMaker({city: "Sherman Oaks", state: "California", country:"United States"});

/* For of Loop */

let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
	total+=income;
}

console.log(total);

/* For of Loop with a string */

let entireName = "Matthew William Fyke";
let numberOfChars = 0;

for(const char of entireName) {
	if(char!==" "){
		numberOfChars++;
	}
}

console.log(numberOfChars);

/* Cannot be used to update the values of the array this returns the name old incomes array */

let oldIncomes = [62000, 67000, 75000]

for(let income of oldIncomes) {
	income+=5000;
}

console.log(oldIncomes);

/* Spread Operator */

let example1 = [1,2,3,4,5,6];
let example2 = [...example1];

console.log(example2);

let example3 = {
	firstName: 'Matt'
};

let example4 = {
	...example3
};

console.log(example4);

/* Rest Operator & Arrow Functions */

function add(...nums) {
	let total = nums.reduce((x, y)=>x+y);
	console.log(total);
}

add(5, 6, 3, 40, 12);

/* Default Params */

function addArray(numArray=[]) {
	let total=0;
	numArray.forEach(element=>{
		total+=element;
	});
	console.log(total);
}

addArray([5,3,6]);
addArray();

/* Includes */

let numberArray = [1,2,3,4,5,6];

console.log(numberArray.indexOf(0));
console.log(numberArray.includes(0));

/* let and const does not hoist declaration like var does */

// if (false) {
// 	let shrek = 5;
// }

// console.log(shrek);

const shrek1 = 6;
console.log(shrek1);
// shrek1 = 10;
// console.log(shrek1);


// can change individual array values on a constant
const shrek2 = [8,9,15];

shrek2[0]=5;
console.log(shrek2);

//can change individual object values on a constant
const shrek3 = {}

shrek3.name = 'Donkey';
console.log(shrek3);

/* Import and Export */

/* padStart() padEnd() */ 

let padExample = "Matt"

//adds 6 spaces

console.log(padExample.padEnd(10," "));

/* Classes */

class Animal {
	constructor(type, legs) {
		this.type=type;
		this.legs=legs;
	}
	makeNoise(sound="loud noise") {
		console.log(sound);
	}
	static returnBestNumber() {
		return 10;
	}
	get metaData() {
		return(`${this.type} ${this.legs}`);
	}
}

const cat = new Animal("cat", 4);
cat.legs=3;
console.log(cat);
cat.makeNoise("meow");
console.log(Animal.returnBestNumber());
console.log(cat.metaData);

class Cat extends Animal {
	makeNoise(sound="meow") {
		console.log(sound);
	}
}

const jimbo = new Cat("cat", 4);

jimbo.makeNoise();
console.log(Cat.returnBestNumber());

/* Trailing Commas */

// trailing commas in an object or argument no longer causes errors

/* async & await */

const apiUrl = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";

function getTop100Campers() {
	fetch(apiUrl)
	.then(response=>{
		response.json()
	})
	.catch(err=>{

	})
}

getTop100Campers();











