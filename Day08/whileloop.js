// while loop

//program 1- print number from 0 to 9 using while loop

// let i=0;

// while(i<=9)
// {
//     console.log(i);
//     i++;
// }
// console.log(`current value of i is ${i}`);
// console.log("hello");


// code for while loop
// program 2- First N natural number sum using while loop (this takes liner time)

let num = 10;
let total = 0;
let i = 0;

while (i<=10)
{
    total = total + i;
    i++;
}
console.log(total);

//Another standard way (this is fast because it takes constant time)
     total = (num*(num+1))/2;
     console.log(total);
