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

// let a = 250;
// let b = 50;
// let c = 150;

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
// // }
// if (a > b) {
//   if (a > c) {
//     console.log("a is the greater");
//   } else {
//     console.log("c is the greater");
//   }
// } else if (b > c) {
//   console.log("b is the greater");
// } else {
//   console.log("C  is the greater ");
// }

// let number = 27;

// if (number % 7 == 0 || number % 10 == 7) {
//   console.log("This is the buzz number");
// } else {
//   console.log("this is not the nuzz number");
// }
// let a1 = 200;
// let b1 = 3000;
// let c1 = 50;
// let result =
//   a1 > b1
//     ? a1 > c1
//       ? "a1 is greatest"
//       : "C1 is greatest"
//     : b1 > c1
//       ? "b1 is greatest"
//       : "c1 is greatest";

// console.log(result);

// let age = 20;
// let res =
//   age > 18 ? "you are eligible for voting" : "You are minor and can not vote";

// console.log(res);

//loops and further part........................

// loops

// for
// while
// do -while

//   loop -> repetition of a task

// 1 - 100 print

// for (start; end(condition); updation){
//   statement
// }

// step 1 -> start
// step 2 -> condition(T)
// step 3 -> statement
// step 4 -> updation

// for (let i = 1; i < 100;i=i+1 or i+=1 or i++)
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i >= 10) {
//   console.log(i);
//   i++;
// }
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i >= 10);

// do vs while ?

// qUESTIONs

// 1. Factorial

// 5! -> variable 5X4X3X2X1

// let factorialOFNum = 1;
// let num = parseInt(prompt("Enter any number "));
// while (num >= 1) {
//   factorialOFNum *= num;
//   num -= 1;
// }
// alert(factorialOFNum);

// for (num; num >= 1; num--) {
//   factorialOFNum *= num;
// }
// console.log(factorialOFNum);

// prompt() -> js -> input -> string -> int
// type conversion
// 1. Implicit and Explicit
// directly compiler | interpreter
// explicit -> forcefully

// 2. Reverse a Number
// 123 -> 321

// let num = parseInt(prompt("Enter any number "));
// let rev = 0;
// let rem = 0;
// while (num > 0) {
//   rem = num % 10;
//   rev = rev * 10 + rem;
//   num = parseInt(num / 10);
// }
// console.log(rev);
// 123
// 0X10 + 3
// 3
// 3X10 + 2
// 32 X10 + 1

// pallindrome--------------------------------------------------------------------------------------------

// let num = parseInt(prompt("Enter any number"));
// let rev = 0,y = num;
// let rem = 0;
// while (num > 0) {
//   rem = num % 10;
//   rev = rev * 10 + rem;
//   num = parseInt(num / 10);
// }
// let pal = y == rev ? "The num is Palindrome" : "The Num is not Palindrome";
// console.log(pal);

//Perfect no = sum of its perfect divisor----------------------------------------------------------------

// let no = parseInt(prompt("Enter the Number"));
// let perfectChecker = 0;

// for (i = 1; i <= parseInt(no / 2); i++) {
//   if (no % i == 0) {
//     perfectChecker += i;
//   }
// }
// let ans =
//   no == perfectChecker ? "The num is Perfect" : "The Num is not Perfect";
// console.log(ans);

//fibonacci Series
// let n = parseInt(prompt("Enter the Number"));
// let num1 = 0;
// let num2 = 1;
// console.log(num1);
// console.log(num2);
// for (let i = 1; i <= n; i++) {
//   let fiboo = num1 + num2;
//   num1 = num2;
//   num2 = fiboo;
//   console.log(fiboo);
// }

// Math Module

// abs()
// pow()
// sqrt()
// cbrt()
// ceil()
// floor()
// random()
// round()

// 1. Abs -> absolute value ->
// 2. pow(base,index)

// ArmStrong

// x = 1634
// Number of Digits -> 4
// 1^4 + 6^4 + 3^4 + 4^4 = value

// let num = parseInt(prompt("Enter any number"));
// let ams = 0;
// let digit = 0;
// let check = num;
// for (check; check > 0; check = parseInt(check / 10)) {
//   digit += 1;
// }
// check = num;
// while (check > 0) {
//   rem = check % 10;
//   ams += Math.pow(rem, digit);
//   check = parseInt(check / 10);
// }
// if (ams == num) {
//   console.log("This is armstrong number");
// } else {
//   console.log("This is not armstrong number");
// }

// functions
// 1.user defined 2. preDefined

// predefined
// console.log()
// prompt()

// 1. User Defined

// functions              parameter              Return
// 1.                       X                     X
// 2.                       X                     yes
// 3.                      yes                    X
// 4.                      yes                    yes

// parameter -> defined
// argument | actual parameter -> when we call

// let x = parseInt(prompt("Enter any number to get its factorial : "));
// function Factorial(x) {
//   let pro = 1;
//   for (let i = 1; i <= x; i++) {
//     pro *= i;
//   }
//   console.log(pro);
// }

// Factorial(x);

// NIVEN

// function NivenNO(n) {
//   let number = n;
//   let sum = 0;
//   let digit = 0;
//   while (n > 0) {
//     digit = n % 10;
//     sum += digit;
//     n = parseInt(n / 10);
//   }
//   if (number % sum == 0) {
//     return "This is the Niven Number";
//   } else {
//     console.log("This is not the Niven Number");
//   }
// }

// function sumOfDigits(number) {
//   let sum = 0;
//   let digit = 0;
//   while (number > 0) {
//     digit = number % 10;
//     sum += digit;
//     number = parseInt(number / 10);
//   }
//   return sum;
// }

// function isPalindrome(number) {
//   let orginalNo = number;
//   let rem = 0;
//   let rev = 0;
//   while (number > 0) {
//     rem = number % 10;
//     rev = rev * 10 + rem;
//     number = parseInt(number / 10);
//   }
//   if (rev == orginalNo) {
//     return true;
//   }
//   return false;
// }

// function isEvenPalindrome(number) {
//   if (isPalindrome(number)) {
//     if (number % sumOfDigits(number) == 0) {
//       console.log("This is an Even Plaindrome");
//     } else {
//       console.log("This is an odd palindrome");
//     }
//   } else {
//     console.log("This is not even a plaindrome");
//   }
// }

// let number = parseInt(prompt("Enter the Number"));
// isEvenPalindrome(number);

function factorial(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  return fact;
}

function isKrishnaMurthyNumber(number) {
  let originalNum = number;
  let digit = 0;
  let sum = 0;
  while (number > 0) {
    digit = number % 10;
    sum += factorial(digit);
    number = parseInt(number / 10);
  }
  if (originalNum == sum) {
    console.log("This is an krishnamurthy number");
  } else {
    console.log("This is not an krishnamurthy number");
  }
}

let number = parseInt(prompt("Enter the Number You want to check"));
isKrishnaMurthyNumber(number);



