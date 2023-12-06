//iterables
// on which we can apply for of loop
// string, array are iterables


const firstName = "Pooja";
for(let char of firstName)
{
    console.log(char);
}

const items = ['item1','item2','item3'];
{
    for(let item of items)
    {
        console.log(item);
    }
}

// array like object
// jinke pass length property hai
// aur jinko hum index se access kr skte hai
//example - string
//objects are not iterables

const firstName1 = "Pooja";
console.log(firstName1.length);
console.log(firstName1[2]);