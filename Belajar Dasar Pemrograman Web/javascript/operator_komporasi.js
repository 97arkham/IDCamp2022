let x = "10";
let y = 10;
let z = 12;

console.log(y<z); //true
console.log(y>z); //false
console.log(x == y) // true, karena nilainya sama-sama 10
console.log(x === y) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* AND operator */
console.log(y < 15 && z > 10); // (true && true) -> true
console.log(y > 15 && z > 10); // (false && true) -> false

/* OR operator */
console.log(y < 15 || z > 10); // (true || true) -> true
console.log(y > 15 || z > 10); // (false || true) -> true

/* NOT operator */
console.log(!(y < 15)); // !(true) -> false
console.log(!(y < 15 && z > 10)); // !(true && true) -> !(true) -> false

/* output
true
false
true
true
false
false
*/