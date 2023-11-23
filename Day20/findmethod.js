//find method

//find method will return you the string whose length is matching your provided length


const myArray = ["Hello","Cat","Dog","Lion"];

function isLength3(string)
{
    return string.length === 3;
}
const ans = myArray.find(isLength3);
console.log(ans);



//Example 2- find the user whose ID is 3
const users =  [
    {userId:1, userName:"Pooja"},
    {userId:2, userName:"Mundada"},
    {userId:3, userName:"pallu"},
    {userId:4, userName:"hello"},
];

const myUSer = users.find((user)=>user.userId===3);

console.log(myUSer);