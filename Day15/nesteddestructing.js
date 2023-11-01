//Nested Destructuring

const users = [
    {userID: 1, firstName:"pooja", gender:"female"},
    {userID: 2, firstName:"mundada", gender:"female"},
    {userID: 3, firstName:"xyz", gender:"male"},
]

const [user1, user2, user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);

//print user1 firstname and ID and user3 gender

    const [{firstName,userID}, , {gender}] = users;
    console.log(firstName);
    console.log(userID);
    console.log(gender);

    //you can change variable name
    //ex -   const [{firstName:user1}, , {gender}] = users; here, using : you can change variable name.

