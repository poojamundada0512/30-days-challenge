//map Method
//map method also take callback function as a input
//map function always makes a new array

const numbers = [1,2,3,4,5];

const square = function(number)
{
    return number * number;
}

const squareNumber = numbers.map(square);
console.log(squareNumber);