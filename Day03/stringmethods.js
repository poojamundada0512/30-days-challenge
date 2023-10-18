//Methods to work with string

//1-Trim

let firstName = "Pooja";// without spaces
 
    // let firstName = "   pooja   ";//commeting out for slice
    console.log(firstName.length);
    // firstName.trim(); //this is giving a new string

    //make new variable and store existing one
        // let newString = firstName.trim();
        // console.log(newString);
        // console.log(newString.length);

    // Without making new variable
        // firstName = firstName.trim();
        // console.log(firstName);
        // console.log(firstName.length);


     
// //2-toUppercase
// firstName = firstName.toUpperCase();
// console.log(firstName);

// //3- toLowercase
// firstName = firstName.toLowerCase();
// console.log(firstName);

//4 - Slice (we use this if we need particular characters from string) (strat Index & End Index)

let newString = firstName.slice(0,3);
console.log(newString);
