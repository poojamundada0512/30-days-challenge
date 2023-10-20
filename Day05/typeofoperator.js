//Undefined
    //when you ame a variable but does not assign  the value to it.

    let firstName;
    console.log(firstName); //here we have not assigned value to firstName variable so output is undefined, this same works for var variable but for const you have to add value or that gives you a error.


    //Null
    let myVariable = null;
    console.log(myVariable);

    console.log(typeof null); // here output is object that should be null, this is a error or bug in jS.



    //BigInt (JS has some limits for Int so for storing  big numbers we use BigInt)

    let myNumber = BigInt(6257557665557785769558);
    console.log(myNumber);

        //another way to save BigInt
            let myNumber1 = 39774796767987969767n;
            console.log(myNumber1);

    //We can perform various operations on BigInt
        console.log (myNumber + myNumber1); //you can not add BigInt with another data type like number normal interger 



    //Booleans & Compariosn Operator
        //booleans means true or false
        //compariosn opertor which compare value and print that our condition is true or false
         
        let num1 = 7;
        let num2 = 8;
        console.log (num1>=num2);

        let num3 = 8;
        let num4 = 7;
        console.log (num3>=num4);

        let num5 = 8;
        let num6 = 8;
        console.log (num5==num6);


        // == - this == means it checks value of both and its equal it will print true also it only checks the value not data type, means also your data type is not same but value is same it will gives you true ans this happens only in JS. in other programming lagnauge that check data type too.
        // === - this === means it checks value as well as data type of given value and if it is same then only o/p will be true or else false.
        //!= - this != means it will check the value is not equal if value is not equal it will gives u true also it doesnt check data type only value it checkes.
        //!== - this !== means it will check the value as well as data type of value.



