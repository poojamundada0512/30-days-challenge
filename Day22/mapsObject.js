//Maps
//map is an iterable
//store data in ordered function

//store key value pair (like object)

//duplicate objects are not allowed like objects

//Difference between maps and objects

//--- objects can only have string or symbol as key

//--- In Maps you can use anything as key like array, numbers, string.

// [object literal example - 
// [ In object literal keys are always in string or in symbol
// const person = 
// {
//     firstName:"pooja",
//     age:21,
//     1:"one"
// }
// console.log (person.firstName);

// //how to check value of key

// for(let key in person)
// {
//     console.log(typeof key);
// }
// ]



//Maps - map will also store key value pair

const person = new Map();
person.set('firstName','Pooja');
person.set('age','24');
person.set('1','one');
person.set([1,2,3],'Hello') //In map you can use array key
console.log(person);  //using map you can assign any type of key value


//How can we access key pair value

console.log (person.get('age'));

//print all the keys

console.log(person.keys()); //this is a map iterator you can use loop here


//Map is iterable here you can use for of loop
for(let key of person)
{
    console.log(key);
}


//Example - 2
// I have one object but need to add data later
 const person1 =
 {
    id:10,
    lastName:"Hello"
 }

 const userInfo = new Map()
 userInfo.set(person1, {gender:"female"});
 console.log(userInfo);


 //Print only users ID
 console.log(person1.id);

 //get value of person1
 console.log(userInfo.get(person1).gender);
