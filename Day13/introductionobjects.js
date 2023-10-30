//objects
//object is a reference type
//arrays are good but not sufficient for real world data

//objects stores key value pairs ex-name:"pooja",age:"23" 
//we also called key as a property
//objects don't have index
//In JS key are in string by default


//how to create object, use {} for object
    const person = {name:"pooja",age:"23"}
    console.log(person);
    console.log(typeof person);

    //when you use {} it is also called object literals
    
    //without using index how to access the data in object (you can use .(dot notation) as well as [""] (bracket notation))
    console.log(person.name);
    console.log(person["name"]);
    console.log(person.age);

    //you can store array into object
    const person2 = {
        name:"pooja",
        age:24,
        hobbies: ["dancing","sports","music"]
        
    }
     console.log(person2);

     

     //how to add key value pair to objects

     person2.gender ="female";
     console.log(person2);
   

