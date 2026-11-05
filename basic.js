//------------------using var --------------------------//
// console.log(x);
// var x = 5;
// console.log(x);

// -> output -> undefined and 5

//----------------------------using let-----------------//
// console.log(x);
// var x = 5;
// console.log(x);
// -> output -> refrence error

// hoisting ->

let a = 250;
let b = 50;
let c = 150;

// if (a > b) {
//   console.log("a is greater than b");
// } else {
//   console.log("b is the greater");
// }

//------------Q2----------------------------

// if (a > b) {
//   if (a > c) {
//     console.log("a is the greater");
//   } else {
//     console.log("c is the greater");
//   }
// } else if (b > a) {
//   if (b > c) {
//     console.log("b is the greater");
//   } else {
//     console.log("c is the greater");
//   }
// } else if (c > a) {
//   if (c > b) {
//     console.log("c is the greater ");
//   } else {
//     console.log("b  is the greater ");
//   }
// }
if (a > b) {
  if (a > c) {
    console.log("a is the greater");
  } else {
    console.log("c is the greater");
  }
} else if (b > c) {
  console.log("b is the greater");
} else {
  console.log("C  is the greater ");
}

let number = 27;

if (number % 7 == 0 || number % 10 == 7) {
  console.log("This is the buzz number");
} else {
  console.log("this is not the nuzz number");
}
let a1 = 200;
let b1 = 3000;
let c1 = 50;
let result =
  a1 > b1
    ? a1 > c1
      ? "a1 is greatest"
      : "C1 is greatest"
    : b1 > c1
      ? "b1 is greatest"
      : "c1 is greatest";

console.log(result);

let age = 20;
let res =
  age > 18 ? "you are eligible for voting" : "You are minor and can not vote";

console.log(res);
