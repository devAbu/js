/* var a = "hello";  */
let a = "hello";

console.log(a);

{
  /* let a = "goodbye";
  console.log(a); */
  let salary = 90000;
}

/* console.log(salary); da je var salary...radilo bi*/

/* const - it can not be changed */
const some_variable = 2;
/* some_variable = 3; --> ERROR */

const array = [1, 2, 3];
/* array = [2, 5]; --> ERROR */

array.push(4); // we can manipulate
console.log(array);

/* TEMPLATE LITERALS/STRINGS */
var string1 = "hello";
var string2 = "world";
var sentence = string1 + " " + string2;
console.log(sentence);
/* OLD WAY */

let sentence2 = `Hello ${string2}`;
console.log(sentence2);

/* SPREAD OPERATOR */
let some_array = [7, 8, 9];
let some_array2 = [6, ...some_array, 10];
console.log(some_array2);

function print(a, b, c) {
  console.log(a, b, c);
}

let some_array3 = [1, 2, 3];
print(...some_array3);

function print2(...argument) {
  console.log(argument); /* Array */
}
print2(1, 2, 3, 5, 10);

function butter(...z) {
  let a = [1, 2, 3, ...z];
  return a;
}

butter(4, 5, 6);

/* DESTRUCTURING - array */
let array1_1 = [100, 200];
let [array1_2, array1_3] = array1_1;
console.log(array1_2, array1_3);

let fellowship = ["Frodo", "Gandalf", "Aragorn"];

let [hobbit, wizard, ranger] = fellowship;
console.log(hobbit, wizard, ranger);

let something = [100, 200, 300, 400, 500];

let [something_2, ...something_3] = something;
console.log(something_2, something_3);

/* DESTRUCTURING - object */
let magical = true;
let power = 2;

let some_hero = { magical: true, power: 10 };
/* var magical = wizard.magical;
var power = wizard.power; */
//let { magical, power } = some_hero;
/* If the variables are already defined ==> */
({ magical, power } = some_hero);
console.log(magical, power);

/* ARROW FUNCTIONS */

//Arrow function are anonymous - don't have a named identifier
// Don't bind their own "this"
//This is an object that within the function scope. The function then bind keys and values to the this object...Arrow function: "This" keyword - still access the global scope or the function wrapped around

/* function blastoff() {
  console.log("3....2....1... blastoff!");
}
blastoff(); 


setTimeout(function () {
  console.log("3....2....1... blastoff!");
}, 1000);

- OLD*/

setTimeout(() => {
  console.log("3....2....1... blastoff!");
}, 1000);

const blastoff = () => {
  console.log("3....2....1... blastoff!");
};
blastoff();

/*
this.a = 25;

let print = function () {
  console.log("This.a: ", this.a); //ERROR
};
print();

const arrowPrint = () => {
  console.log("This.a: ", this.a);
};
*/

/* MAP FUNCTION - allows us to create arrays by calling a function on each element of an initial array.*/
let points = [10, 20, 30];

/* let addOne = function (element) {
  return element + 1;
}; */

let addOne = (element) => element + 1;

/* points = points.map(addOne); */
points = points.map((element) => element + 1);
console.log(points);

/* FILTERING - FILTER() - creates new arrays with all the same elements of an initial array depending on a test that we give it.*/
/* let isPassing = (grade) => {
  return grade >= 70;
}; */

let scores = [90, 85, 67, 71, 70, 55, 92];

let passing = scores.filter((element) => element >= 70);
console.log(passing);

/* We find also find() - returns a value in an array that passes a given test
forEach() - similar top map, calls a function for each array element 
reduce(), some(), keys(), values()*/
