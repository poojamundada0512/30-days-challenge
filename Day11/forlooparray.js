//for loop in array

let fruits =["apple","mango","grapes","banana"];

//arrays most important property is length

console.log(fruits.length);

//If you want to print apple from array
console.log(fruits[0]);


//you want to access last element from array
console.log(fruits[fruits.length-1]);


//print array using for loop
for(let i=0; i<=fruits.length-1;i++)
{
    // console.log(i);
    console.log(fruits[i]);
    //print all string in Uppercase
    console.log(fruits[i].toUpperCase());

    //print this in third array
    let fruits2 = []
    fruits2.push(fruits[i].toUpperCase());
    console.log(fruits2);
}



