//for each Method

    const numbers = [4,2,5,8];
    // function Myfunc(number, index)
    // {
    //     console.log(`index is ${index} number is ${number}`);
    // }

    //numbers.forEach(Myfunc); //you can written this callback function here too


    //examples - 
    numbers.forEach(function(number,index)
    {
        console.log(`index is ${index} number is ${number}`); 
    });

    //use for eachand multiply every number from array by 2


    numbers.forEach(function(number)
    {
        console.log(number*2);
    })


    //example2-
    const users =[
        {firstName:"Pooja",age:24},
        {firstName:"Jay",age:28},
        {firstName:"Adesh",age:27},
    ]

    users.forEach(function(user)
    {
        console.log(user.firstName);
    })


    //using arrow function 
    users.forEach((user) =>
    {
        console.log(user.firstName);
    })