//Array Distructing

const myArray = ["value1","value2","value3","value4"];

//make to variables and store value1 & value2 in them respectively

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];

// console.log ("value of myvar1",myvar1);
// console.log ("value of myvar2",myvar2);

//You can achieve this by shortcut that is array distructing

let [myvar1, myvar2] = myArray;
console.log ("value of myvar1",myvar1);
console.log ("value of myvar2",myvar2);
 
//when you write let then you ca change the value of of variable but when you wwrite const you cannot change the value.
// also when yo want to dont wnat to print one middle index left ha blank with one , 
//ex- let [myvar1, , myvar2] = myArray;


// make new array for value3 & value4 and print
    // let myNewarray = myArray.slice(2);
    // console.log(myNewarray);

// use above method directly while distrcting
    //let [myvar1, myvar2,...myNewarray] = myArray;
