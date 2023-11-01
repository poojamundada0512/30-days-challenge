//Object inside array
//very useful in real world applications

const users = [
    {userID: 1, firstName:"pooja", gender:"female"},
    {userID: 2, firstName:"mundada", gender:"female"},
    {userID: 3, firstName:"xyz", gender:"male"},
]
//  

//to iterate use for of loop

for (let user of users)
{
    // console.log(users);
    console.log(user.firstName);

}