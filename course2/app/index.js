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
/* var string1 = "hello";
var string2 = "world";
var sentence = string1 + " " + string2;
console.log(sentence);
OLD WAY*/

let sentence2 = `Hello ${string2}`;
console.log(sentence2);
