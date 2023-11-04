//rest Parameters

    function fun(a,b,...c) // store a=3 b=4 and rest in c
    {
        console.log(`a is ${a}`);
        console.log(`b is ${b}`);
        console.log(`c is ${c}`);
    }

    fun(3,4,5,6,7,8,9);


    //create addAll name function and pass argument and some of all them (you can add as many argument u want)

    function addAll(...numbers)
        {
            let total = 0;
            for(let number of numbers)
            {
                total = total +number;
            }
            return total;
        }
            const ans = addAll(2,3,5,4)
            console.log(ans);