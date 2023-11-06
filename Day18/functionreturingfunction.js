// function returning function

    function myFunction()
    {
        function hello()
        {
            return "hello world"      // console.log("Hello World")
        }
        return hello;
    }

    const ans = myFunction();
    console.log(ans());