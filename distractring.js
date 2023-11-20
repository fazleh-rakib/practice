const fish = {
  name: "hilsha",
  color: "silver",
  price: 4000,
  phone: "01444",
};

// const { name, phone, price } = fish;

// const name = fish.name;
// const phone = fish.phone

// console.log(phone);
// console.log(name);
// console.log(price);

// const {name , age} = {name: 'rahul' , age: 31, phone: '01223232'}
// // console.log(name , age);

// const [first , another , last] = [20, 30, 50, 60]
// console.log(first , another , last);

const arrow = (a, b, c) => a * b * c;

// const result = arrow(10, 20, 30);
// console.log(result);

const string = `I am a developpper.
I love to code. 
I love pussy Cats
`;

// console.log(string);

// const add = (num1 , num2=0) => num1 + num2

// const result = add(20)
// console.log(result);

const array = ["rakib", "siam", "rana"];

// const friends = (array) => {
//     let newArray = []
//    array.forEach(element => {
//   if (element.length % 2 === 1) {
//   newArray.push(element)
//   }
//    });
//   return newArray;
// };
const friends = (array) => {
    let newArray = []
  for (const element of array) {
    if (element.length % 2 === 0) {
        newArray.push(element)
    }
  }
  return newArray;
};

console.log(friends(array));
