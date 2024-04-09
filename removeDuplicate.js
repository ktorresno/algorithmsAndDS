/*
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/

function removeDupeChars(chars) {
    let strWithoutDuplicates = '';

    return chars.split('').filter( item => {
        if (strWithoutDuplicates.indexOf(item) < 0) { // add it if not found
                strWithoutDuplicates += item;
                return true;
            }
            return false;
    }).join(''); 
}
console.log(removeDupeChars("aabbccb1212"));

// +*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*
// +*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*
// +*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*


/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

function removeDupesFromArray(arr){
    // Avoiding using nested loops: create a new object to keep track of duplicates
    // use filter to loop thorugh each item in the arr
    const trackDups = {};
    return arr.filter(item => {
        // Look up the item in the lookup table, when it doesn't exist, add it and return true
        if (!trackDups[item]) {
            trackDups[item] = item;
            return true;
        }
        return false;

    });

    // Shorter alternative solution is using Set, which removes duplicates implicitly
    // return [...new Set(arr)];
}

module.exports = { removeDupeChars, removeDupesFromArray };