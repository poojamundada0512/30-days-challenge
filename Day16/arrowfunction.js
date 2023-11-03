//Arrow Function

const singHappyBirthday = () => //here you can use var or let 
{
    console.log("Happy Birthday to you.....");

}
    singHappyBirthday();



    //Example-2
    const sum = () =>
    {
        return 2+4;
    }

    console.log(sum());

    //for this Arrow function just have to remove function word and add => after ()
    //you cannot work on Fucntion expression, function declaration and arrow function in 1 file
    //also when u use single parameter it is ok if you dont use () ex- (Number) = Number
    // but when you have more than 1 parameter or 0 paramter you have to use()


    //shortcut
    const sum1 = () =>  2+4; //we have removed {} and removed word return but it will still work as expected
    
    console.log(sum1());