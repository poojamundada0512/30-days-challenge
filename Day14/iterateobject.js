//How to iterate Object

const person2 = {
    name:"pooja",
    age:24,
    "person hobbies": ["dancing","sports","music"]
    
}

//We used 2 methods for Iterate Object
// 1. for in loop
// 2. Object.keys


//for in loop

    for (let key in person2)
    {
        console.log(key);
         //now you want value of that key
             console.log(person2[key]);
        //print key value pair using template string
            console.log(`${key}:${person2[key]}`);
            console.log(key,":",person2[key]);

            //object.keys will give you the array
            console.log(Object.keys(person2));
            console.log(typeof (Object.keys(person2)));
            const val = Array.isArray(Object.keys(person2));
            console.log(val);
    }

    
        

   