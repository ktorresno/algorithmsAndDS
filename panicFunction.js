/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/


const panic = (originStr) => {
    const tempArr = originStr.split(' ');
    let tempStr = '';
    if (tempArr.length > 1) {
        tempStr = tempArr.join(' 😱 ');
    } else {
        tempStr = tempArr[0];
    }
    console.log(tempStr);
    return `${tempStr.toLocaleUpperCase()}!`;
}

const panic2 = (originStr) => {
    return originStr
            .split(' ')
            .join(' 😱 ')
            .toLocaleUpperCase() + '!';
}

module.exports = panic;