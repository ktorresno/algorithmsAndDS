/*

Wite a program to grant special bonuses to all employees from the Acme Company based on their employee ID numbers! 

The Acme company has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

function awardBonuses(numArr){
    return numArr.map((num, idx) => (num % 3 === 0) ? `${idx+1} - Vacation!` : (num % 5 === 0) ? 
    `${idx+1} - $100,000 bonus!` : `${idx+1} - :(`);
}


function awardBonuses100(){
    // loop through 1 - 100
    for(let i = 1; i <= 100; i++){
        // is divisible by 3 & 5? 
        if(i % 15 === 0){
            console.log(`${i} - JACKPOT! 1 Million and a Yacht!`);
        } else if(i % 3 === 0){
            console.log(`${i} - Vacation!`);
        } else if(i % 5 === 0){
            console.log(`${i} - $100,000 bonus!`);
        } else {
            console.log(`${i} - :(`);
        }
    }
}

module.exports = { awardBonuses, awardBonuses100 };