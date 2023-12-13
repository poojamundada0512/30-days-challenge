//Methods
//methods is a function inside object

const person =
{
    firstName : "pooja",
    age : 21,
    about : function()
    {
        // console.log("person name is pooja and age is 8"); //without this keyword
        // console.log(`person name is ${this.firstName} and age is ${this.age}`);
        console.log(this);
    }
}
person.about();

//now on above example if we change the fisrtname still it will print the existing name
// we want that name should be change the way user want.


//example-2 
function personInfo()
{
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 =
{
    firstName : "pooja",
    age : 21,
    about : personInfo
}
const person2 =
{
    firstName : "sayali",
    age : 23,
    about : personInfo
}
const person3 =
{
    firstName : "Akansha",
    age : 25,
    about : personInfo
}

person1.about();
person2.about();
person3.about();
