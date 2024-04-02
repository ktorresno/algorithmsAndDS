/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps1(str){
    let strSplit = str.split('');
    const newStr = [];
    for (let i = 0; i < strSplit.length; i++) {
        if (i % 2 == 0) {
            newStr.push(strSplit[i].toUpperCase());
        } else {
            newStr.push(strSplit[i]);
        }
        
    }
    return newStr.join('');
}

console.log(altCaps1("When you visit Portland you have to go to VooDoo Donuts"));
console.log(altCaps1("I'm so happy it's Monday"));

function altCaps(str){
    return str
        .split('')
        .map((element, idx) => (idx %2 == 0 ) ? element.toUpperCase() : element)
        .join('');
}

module.exports = altCaps;