// some method

const numbers = [3,5,8,9];

//find is any singel number in array is even if yes then it will return true

const ans = numbers.some((number)=>number%2===0);

console.log(ans);


//Example - 2

const userCart =  [
    {productId:1, ProductName:"phone",price:15000},
    {productId:2, ProductName:"laptop",price:250000},
    {productId:3, ProductName:"TV",price:5000},
]

//check is there any product whose price is going above 1 lakh

const result = userCart.some((cartItem)=> cartItem.price > 100000);
console.log(result);