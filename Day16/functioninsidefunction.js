//function Inside function

    const app = () =>
    {
        const myFunction = () =>
        {
            console.log("Hello World");
        }

        const addTwo = (num1,num2) =>
        {
            return num1+num2
        }


        console.log("inside app");
        myFunction();
        console.log(addTwo(2,3));
    }

        app();