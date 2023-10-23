//And(&&)  &  Or(||) Operator

//&& (works when both condtion are true)

let firstName = "Pooja";
let age = 22;

if (firstName[0]==="P" && age>18)
{
    console.log("Name starts with p and age is above 18");
}
else
{
    console.log("condtion is false");
}

// || (works when any one condition is true)
let firstName1 = "Pooja";
let age1 = 22;

if (firstName1[0]==="p" || age1>18) 
{
console.log("Name starts with p and age is above 18");
}
else
{
console.log("condtion is false");
}