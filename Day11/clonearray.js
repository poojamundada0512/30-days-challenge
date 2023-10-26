//clone array 
//clone (copy)

//how to concatinate 2 array

let array1 = ["item1","item2"];
let array2 = array1;

console.log (array1===array2);

//How to clone an array 
    //1st way using slice
    array2 = array1.slice(0);
    array1.push("item3");
    console.log (array1===array2);
    console.log(array1);
    console.log (array2);

    //2nd way using Concat
    array2 = [].concat(array1);
    array1.push("item4");
    console.log (array1===array2);
    console.log(array1);
    console.log (array2);

    //3rd way using Spread operator(...)
    array2 = [...array1];
    array1.push("item5");
    console.log (array1===array2);
    console.log(array1);
    console.log (array2);


// Program1 - print all elements in array 2 from array 1 also add some extra array
    //using slice
    array2 = array1.slice(0).concat(["item6","item7"])
    console.log (array1===array2);
    console.log(array1);
    console.log (array2);

    //using Spread operator(...)
    array2 = [...array1,"item7","item8"];
    console.log (array1===array2);
    console.log(array1);
    console.log (array2);
