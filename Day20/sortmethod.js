//Sort Method
// sorting can arrange your number in assending or decending order
//sort method change the original array

const numbers = [1200,2500,9,6,36]; //JS take this numbers as a string not numbers
//here JS cheks the ASCII code of given values (becoz that are considered as string not numbers)
numbers.sort();
console.log(numbers);

// 1200  2500   9   6   36
//for 1200 JS only check the ASCII value of 1 that is 49
//for 2500 JS only check the ASCII value of 2 that is 50
//for 9  ASCII value is 57
//for 6  ASCII value is 54
//for 36 ASCII value of 3 is 51

//[49,50,57,54,51]
//[49,50,51,54,57]
//[1200,2500,36,6,9]

//Disadvantage of sort that it didnt sort in numbers

//How can u sort numbers in assending order

const numbers1 = [1200,2500,9,6,36,55];
numbers1.sort((a,b)=>
{
    return a-b;
    //numbers1.sort((a,b)=>a-b);
});
console.log(numbers1);


//How can u sort numbers in decending order

const numbers2 = [1200,2500,9,6,36,55];
numbers2.sort((a,b)=>
{
    return b-a;
    //numbers2.sort((a,b)=>b-a);
});
console.log(numbers2);



//Example-2 
//sort products price low to high

const products = [
    {productId:1, productName:"p1", price:3000},
    {productId:2, productName:"p2", price:2000},
    {productId:3, productName:"p3", price:5000},
    {productId:4, productName:"p4", price:4000},
    {productId:5, productName:"p5", price:6000},
]

//low to high
products.sort((a,b)=>{
    return a.price - b.price
})
console.log(products);
