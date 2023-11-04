//Block Scope Vs Function Scope

    //let and const are block scope
    //var is a function scope
    // block scope meand between {}

    {
        let firstName = "pooja";
        console.log(firstName);
    }

    {
        const firstName = "pooja";
        console.log(firstName);
    }
     //you can not access this to out of block


     {
        var firstName = "Mundada";
        console.log(firstName);
    }
    console.log(firstName);

//In the case of var you can access this inside block as well as ouside block
//you can create a one var and you can access that all over the file



//examples-
if(true)
{
    let firstName1 = "Setoo";
    console.log(firstName1);
}
    //console.log(firstName1); //you can not define like this for let


    function myApp()
    {
        if(true)
        {
            let firstName2 = "Milk"
            console.log(firstName2);
        }
        //console.log(firstName2); //because you have used let you cannot access this
    }
    myApp();


    //var
    function myApp()
    {
        if(true)
        {
            var firstName2 = "Milk"
            console.log(firstName2);
        }
        console.log(firstName2); //because you have used var you can access this
    }
    myApp();
