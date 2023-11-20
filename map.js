const numbers = [2, 4, 8, 9];

// function doubleFunc(numbers) {
//   const doubled = [];
//   for (const number of numbers) {
//     let doubleIt = doubleMulti(number);
//     doubled.push(doubleIt);
//   }
//   return doubled
// }

// const doubleMulti = num => num * 2

// const makeDouble = numbers.map(doubleMulti)

// // const result = doubleFunc(numbers)
// // console.log(result);
// console.log(makeDouble);

const multi = (num) => num * 6;
const sixTimes = [2, 33, 6, 777];
const output = sixTimes.map(multi);

const fiveTimes = [1, 2, 3, 4, 5].map((x) => x % 3);
// console.log(...fiveTimes);

const friends = ["rakib", "mizan vai", "Maruf"];
let arry = [];
const firstLetter = friends.map((x) => {
  if (x === "mizan vai") {
    arry.push(x);
    return arry;
  }
});

// console.log(...arry);

const mizanVai = friends.filter((friend) => friend === "mizan vai");
// console.log(mizanVai);
// console.log(...mizanVai);

const numbers2 = [2, 33, 6, 7];
const total = numbers2.reduce((a, b) => a + b, 0);

console.log(total);
