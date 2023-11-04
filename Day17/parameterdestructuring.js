//Parameter Destructuring

    //we use this with object

    const person = 
    {
        firstName: "pooja",
        gender: "female",
    }

    function printDetails(obj)
    {
        console.log(obj.firstName);
        console.log(obj.gender);  
    }

    printDetails(person);

    //Now do parameter destructuring of above function

    function printDetails({firstName, gender})
    {
        console.log(firstName);
        console.log(gender);  
    }

    printDetails(person);
  