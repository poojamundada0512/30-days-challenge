//Function
//How to create a function
//undefined + undefined = NaN that is not a number

    function singHappyBirthday() //function declaration
    {
        console.log("Happy Birthday to you.....")
    }

    singHappyBirthday(); //Calling function

    //assume you want to do a calulation again and again for same number
        // function sum()
        // {
        //     console.log(2+4);
        // }

        // sum();


        //also,
        function sum()
        {
            return 2+4;
        }

        console.log(sum());


    //Make function reusable
        function sumNumbers(number1, number2) //number 1 & number 2 are parameters
        {
            return number1 + number2;
        }

        const returnedValue = sumNumbers(10,10); //here 10 , 10 is arugument (value which u pass)
        console.log(returnedValue);



        //Program- Number is even or odd rint true if number is even else return false
        //input: 1 Number

            function isEven (number)
            {
                if(number % 2 ===0)
                {
                    return true
                }
                else{
                    return false
                }
            }



            console.log (isEven(2));
            console.log (isEven(3));


            //function which will take a input as a String and in return that will give first letter of that string

                function firstLetter(anyString)
                {
                    return anyString[0];
                }

                    console.log(firstLetter("abc"));



            //Function which will take input as Array and Target in Number, and in output return index of target present in array if not present return -1
                
                function  findTarget(array,target)
                {
                    for(let i=0; i<array.length;i++)
                    {
                        if(array[i]===target)
                        {
                            return i;
                        }
                    }
                    return -1;
                }
                    const myArray = [1,2,3,4]
                   const ans = findTarget(myArray,3);
                    console.log(ans);

                