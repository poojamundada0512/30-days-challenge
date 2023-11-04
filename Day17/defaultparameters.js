//Default Parameters


    function addTwo(a,b=0) //here we have set value of b=0 only when we pass one argument
    {
        return a+b;
    }

        const ans = addTwo(4); // here if we pass 4 , 5 then output will be 9 because now this will conside value of b is 5 not 0.
        console.log(ans);