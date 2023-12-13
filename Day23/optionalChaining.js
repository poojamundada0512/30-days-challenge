// Optional Chaining

const user =
{
    firstName : "Pooja",
    Address : {housenumber:'1233'}
}

    console.log (user.firstName);
    console.log(user.Address.housenumber);


    //To avoid error and print undefine use ?.
    // ?. will check the user exists or not

    console.log (user?.firstName);
    console.log(user?.Address?.housenumber);