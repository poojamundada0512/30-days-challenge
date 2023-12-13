// this keyword

console.log(this); //this will print window object which is a global ojeect of java script

//this and window is equal


function myFunc()
{
    // console.log(this); // this will give you a window object
    "use strict"
    console.log(this); // after using strict word this will give you undefined output as we have not mentioned the print output
    console.log("hello world"); // this will print hello world as a output
}
myFunc();
