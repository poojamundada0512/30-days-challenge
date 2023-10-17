// Var Variable

"use strict";
//Variables
//decalre a variables
var firstname="pooja";

//use a variable
console.log(firstname);

//change the value
firstname="mundada";
console.log(firstname); 


//Rules for Naming Variables -

//You cannot start with number
//example-
//1value (invalid)
//value1 (valid)

var value1 = 10;
console.log(value1);
console.log(value1 + 10);
console.log(value1 - 2);
console.log(value1 * 10);
console.log(value1 / 2);


//for power of value
console.log(value1 ** 2);
console.log(value1 ** 3);

//Square root
console.log(value1 ** 0.5);

//Use only _ and $ symbol
    //first_name(valid)
    //_firstname(valid)

    
    //first$name(valid)
    //$firstname(valid)

 var first_name ="mundada" 
 console.log(first_name);  

 var first$name ="poojah"
 console.log(first$name);
 
 
 //you cannot use spaces
    //first name(invalid)

  var first_name  ="rajesh"
  console.log(first_name); //When you use _ in between words it is called as snake case writing
  //console.log(firstName); it is called as Camel case writing


  //convention
    //start with small letter and camelCase




    //let variable

    //declare a variable with let keyword

    let firstName = "pooja";
    console.log(firstName);

    //When you want to create a variable prefer to use let insted of var
    //let keyword will not allow you for same name for another let keyword if it alredy exist.



    //Constant variable

    //constand means whose value never changes

        const pi = 3.14; //here const is not a variable it is a constant

    // pi = 3.15; pi value is constand so you can't make changes here
        console.log(pi); 
        console.log(pi*2); //you can perform differnt operations on pi only you cannot change the value
