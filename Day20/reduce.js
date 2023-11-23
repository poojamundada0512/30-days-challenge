//reduce method

const numbers = [1,2,3,4,5,6,7,8,9];
 
//aim- sum of all numbers present in array

const sum = numbers.reduce((accumulator, curreentValue)=> 
{
    return accumulator + curreentValue;
}, 0); // here you can pass initial value from which value of accumulater can start
console.log(sum);


//How accumulator and currentvalue work
// Accumulator          CurrentValue        return
// 1                        2                   3
// here now for second equation acc value will be the return value of first sum 
// 3                        3                   6
// 6                        4                   10
// 10                       5                   15
// 15                       6                   21
// 21                       7                   28
// 28                       8                   36
// 36                       9                   45


//So, here 45 will be the last some and the output.



//Example-2 - add some product in cart and provide the total sum of all product present in cart


const userCart =  [
    {productId:1, ProductName:"phone",price:15000},
    {productId:2, ProductName:"laptop",price:25000},
    {productId:3, ProductName:"TV",price:5000},
]

const totalAmount = userCart.reduce ((totalPrice , curreentValue) => 
{ 
    return totalPrice + curreentValue.price;
},0);
console.log(totalAmount);

