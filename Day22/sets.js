//sets (it is a iterable)
// store data
// sets also have its own methods
// No index-based access
// order is not guaranteed
// unique items only (no duplicate allowed)
// Difference between array and sets that is No index-based access
//you can store different data types in set

//how can u make set example -
const numbers = new Set([1,2,3]);
console.log(numbers);


const numbers1 = new Set("abc");
console.log(numbers1);



const number = new Set();
number.add(1);
number.add(2);
number.add(3);
console.log(number);


//check if there is any element is present in set or  not

if (numbers.has(1))
{
    console.log("1 is present");
}
else 
{
    console.log("1 is not present");
}
console.log(number);






