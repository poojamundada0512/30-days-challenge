// Call, apply, bind Methods

//call
function about(hobby, music)
{
    console.log(this.firstName, this.age, hobby, music)
}
    const user1 = 
    {
        firstName:"pooja",
        age:21,
    }
    // user1.about();


    const user2 =
    {
        firstName:"Mundada",
        age:24,
    }

    // user1.about.call(user2,"dancing","slow");


    //Apply (In apply you can pass all values in array)

    // user1.about.apply(user2,["dancing","Slow"]);


    //bind (bind will return you the function)
    const func = about.bind(user1,"dancing","slow");
    func();