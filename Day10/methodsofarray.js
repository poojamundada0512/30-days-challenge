//Some Methods of Array 

//1- Array Push Pop


    //If you want to add something in array use Push
     
    //example-1
    let fruits = ["apple","mango","grapes"];
    console.log(fruits);

    //Push Banana 
    fruits.push("banana");
    console.log(fruits);
    

    //If you want to remove something in array use POP
    console.log(fruits);

    //Pop Banana (pop always remove from last)
    fruits.pop("banana");
    console.log(fruits);


    //when you remove or pop something then store that somewhere in variable

    let poppedFruits = fruits.pop();
    console.log(fruits);
    console.log("popped fruit is", poppedFruits);



    //2- Array Shift Unshift


    //Unshift will add data in Front 
    //example 1- Unshift
    fruits.unshift("blackberry");
    fruits.unshift("Myfruits");
    console.log(fruits);


    //shift will remove data from Front 
    //example 1- shift
    fruits.shift();
    console.log(fruits); //this gives you removed string

    let removedFruits = fruits.shift();
    console.log(fruits);
    console.log("removed  fruit is", removedFruits);

    
