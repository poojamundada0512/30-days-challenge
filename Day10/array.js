//Introduction to array
//array is a reference type
//Array is a ordered collection of items or elements
//Array's are mutable
//you can store any data type in array


//how to create a arrays
    //ex-1

    let fruits = ["apple","mango","grapes"];
    console.log(fruits);

    //print only mango from array
    console.log(fruits[1]);


    //ex-2
    let number = [1,2,3,4];
    console.log(number);

    //print only 4 from array
    console.log(number[3]);

    //you can also mix data types
    let mix =["apple",1, null, undefined];
    console.log(mix);



    //In JS refence type is Object
    // so here array is reference type and it is a object
    
    //check typeof
    console.log(typeof fruits);


    //How to check fruit is array or not
    console.log(Array.isArray (fruits));
