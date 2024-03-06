"use strict";

/*
Section 8 : How JS works behind the scenes
*/

// Writing a simple age calculate

// function calcAge(birthYear) {
//   const age = new Date().getFullYear();

//   function printAge() {
//     const outPut = `${firstName}U are ${age} born in ${birthYear}`;
//     console.log(outPut);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `U Millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//   }
//   printAge();
//   return age;
// }

// const firstName = "Pusy";
// calcAge(1995);
// // const myAge = 50;
// // console.log(`
// // myAge is ${myAge}
// // Current Age is : ${calcAge(myAge)}
// // `);

// console.log(
//   `
// %c Hoisting Work
// `,
//   "color:green;font-size:1.5rem;font-style:italic"
// );

// // Example of hoisting

// // console.log(me);
// // console.log(job);
// // console.log(year);

// // Variable declarations here
// var me = "Pussy";
// let job = "diq";
// const year = 1969;

// // Function categories

// console.log(addDecl(2, 3));
// // console.log(addExpor(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpor = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// console.log(
//   `
//   %c This keyword
//   `,
//   "color:green;font-size:1.5rem;font-style:italic"
// );

// console.log(this);

// // Using this method in side a function

// const lin = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(1969 - this.year);
//   },
// };
// lin.calcAge();
