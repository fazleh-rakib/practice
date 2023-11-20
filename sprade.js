const max = Math.max(20, 30, 85, 111)
// console.log(max);
const maxArray = [20, 30, 50,700]

const result = Math.max(...maxArray)
// console.log(result);


const maxArray2 = [...maxArray]
maxArray.push(15)
maxArray.push(25)
maxArray.pop()
maxArray2.push(222)
maxArray2.push(333)
// maxArray2.pop()
// console.log(maxArray,'max array');
// console.log(maxArray2,'max array2');


const maxArray3 = [45, 78, ...maxArray, 500]
// console.log(maxArray3, 'max array 3');


const friends = ['sakib', 'momin ' , 'shimul']

const newFriends = ['hridoy', ...friends]
console.log(newFriends);