//callback functions

   function myFunction()
    {
        console.log("Inside my function 1")
    }


    function myFunction2(callback)
    {
        console.log("Hello There!") 
        callback();
    }


    myFunction2(myFunction); 
    //In callback function you can call one function and assign another function to them as a parameter



    