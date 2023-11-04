//Lexical Scope

    //example 1-
        const myVar = "value1";
        function myApp() {
            function myFunct()
            {
                const myVar = "value59";
                console.log("inside function",myVar)
            }
            console.log(myVar);
            myFunct();
        }

        myApp();