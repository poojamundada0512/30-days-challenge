// Spread Operator

//spread operator in object

const obj1 = 
{
    key1:"value1",
    key2:"value2",
};

const obj2 = 
{
    key3:"value3",
    key4:"value4",
};

const newObject = {...obj1,...obj2}; //you can add new key here - const newObject = {...obj1,...obj2,key:"value10"};
const newObject1 = {..."abc"};
console.log(newObject);
console.log(newObject1);
