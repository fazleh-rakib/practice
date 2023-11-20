const numbers = [1, 3, 5, 7, 9];

const number = numbers.map((num) => num + 1);
// console.log(number);

// const numbers2 = [33, 50, 79, 78, 90, 101, 30];
const numbers2 = [33, 50, 50];
const newNumber = [];
const number2 = numbers2.map((num) => {
  if (num % 10 === 0) {
    newNumber.push(num);
  }
});
// console.log(newNumber);

/* Filter loop */
// const filterNumber = numbers2.filter((num) => num % 10 === 0);
// console.log(filterNumber);

/* ---------
find loop */

const filterNumber = numbers2.find((num) => num % 10 === 0);
// console.log(filterNumber);
/* reduce ------
-----------------*/
const rN = numbers2.reduce((a, b) => a + b, 0);
// console.log(rN);

const reduceNumber = numbers2.reduce((previousValue, currentVAlue) => {
  result = previousValue + currentVAlue;
  return result;
}, 0);
// console.log(reduceNumber);

const people = [
  { name: "natasha", age: 7 },
  { name: "sophia", age: 4 },
  { name: "sania", age: 3 },
];
const reduceAge = people.reduce(
  (previousValue, newValue) => previousValue + newValue.age,
  0
);
// console.log(reduceAge);


const data = {
  location: [
    {
      city: 'dhaaka'
    }
  ]
}

console.log(data.location[0].city);
