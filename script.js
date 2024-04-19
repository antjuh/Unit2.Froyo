// create a program that takes user input, parses it into an array
// then count how many times a variable appears inside the array and
// track that using an object, then print to object



// prompt asking for user input and then creating an array based on that
let input = prompt("Enter a list of flavors separated by commas:");
let array = input.split(",");



// calling a function listed below that counts the recurrence of variables
// inside the array
counts(array);



function counts(array){
    // creating the object that we will use to hold our counts
    var flavors = {}

    // loop that sorts through array
    for(var i = 0; i < array.length; i++){
        //placing each flavor into the array
        flavors[array[i]] = [];

        //counting each time a duplicate value appears
        for(var x = 0; x < array.length; x++){
            (array[i] == array[x]) ? flavors[array[i]].push(x) : '';
        }
        flavors[array[i]] = flavors[array[i]].length;
    }

    console.log(flavors);
    return flavors;
}