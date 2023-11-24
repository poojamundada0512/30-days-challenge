// every method

const numbers = [2,4,6,8,10];
//check wether the number present in array are even

const ans = numbers.every((number)=>number%2===0);
//callback function will return true / false (boolean value)

//every method will return true / false (boolean)

console.log(ans);


//Example-2
const userCart =  [
    {productId:1, ProductName:"phone",price:15000},
    {productId:2, ProductName:"laptop",price:25000},
    {productId:3, ProductName:"TV",price:5000},
]

//check every product prize is less than 30,000

const result = userCart.every((cartItem)=>cartItem.price < 30000);

console.log(result);
