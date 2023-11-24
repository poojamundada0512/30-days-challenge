//splice method

// when you want insert or delete anything from array splice method is use


const myArray = ['item1', 'item2', 'item3'];

//delete
myArray.splice(1,1);
console.log(myArray);

//insert

myArray.splice(1,0,'inserted item'); //0 is number of item you want to delete
console.log(myArray);



//insert and delete together

myArray.splice(1,2,'inserted1','inserted2');
console.log(myArray);