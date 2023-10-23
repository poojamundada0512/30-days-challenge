//if else condiotion
//program 1- if user's age is 18 or more than 18 so user can apply for licence else not

let age = 19;
if(age>=18)
{
    console.log("you can apply for licence");

}

else{
    console.log("you are underage to apply for licence");
}

//program 2 - Check whether given number is even or odd

    let num = 14;

    if(num%2===0)
    {
        console.log("number is even");
    }
    else{
        console.log("number is odd");
    }


    //Falsy Values (all below mentioed are falsy values)
    // 1- false
    // 2- "" - empty String
    // 3-  null
    // 4- undefined
    // 5- 0

    let firstName = "";
     if(firstName)
     {
        console.log(firstName);
     }
     else{
        console.log ("firstName is empty")
     }


     //Truthy values (all below mentioed are truthy values)
    //  1- "abc"
    //  2- 1 and -1 (any +ve or -ve value except 0)

    let firstName1 = "Pooja";
    if(firstName1)
    {
       console.log(firstName1);
    }
    else{
       console.log ("firstName1 is empty")
    }