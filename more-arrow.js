const add = (num1, num2) => num1 + num2;

// const result = add(10 ,20)
// console.log(result);

const morePeramiter = (a, b, c) => a + b + c;

// const result = morePeramiter(10,20,30)
// console.log(result);

// oneperamiter

const oneP = (num) => num * 2;
// const result = oneP(2)
// console.log(result);


// const getPi = () => 3.1416
// const result = getPi()
// console.log(result);


const bigArrow = (a , b, c ) =>{
    const firstSum = a + b
    const lastSum = b + c
    const total = firstSum + lastSum
    return total
}

// const result = bigArrow(10 ,5 ,15)
// console.log(result);

// const obj = {
//     name: 'deeecode',
//     age: 200,
//     print: function() {
//       const print2 = () => {
//         console.log(this)
//       }
      
//       print2()
//     }
//   }
  
//   obj.print()

const obj = {
  name: 'deeecode',
  age: 200,
  print: function() {
    function print2() {
      console.log(this)
    }
    
    print2()
  }
}

obj.print()