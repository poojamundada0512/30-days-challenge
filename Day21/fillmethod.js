//fill method
// value, start, end
 

const myArray = new Array(10).fill(0);
console.log(myArray);



//Example-2 -- you have one array from that make some numbers zero


const myArray1 = [1,2,3,4,5,6,7,8];
myArray1.fill(0,2,5); 
// 0 is the value filled
// 2 is the start index
// 5 is the end index

console.log(myArray1);