// How to make a template usin string


//without using Template String
let firstName = "pooja"
let age = 23;
//My name is pooja and my age is 22 
let aboutMe = "My name is " + firstName + " and My age is " + age;
console.log(aboutMe);


//Using Template String
let aboutMe1 = `My name is ${firstName} and My age is ${age};`
console.log(aboutMe1);

