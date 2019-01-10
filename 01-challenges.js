//****************************************
// Challenge Assessment 1
//***************************************

// What is a palindrome?  A palindrome is a word that is spelled the same way, both forwards and backwards 
//(i.e. bob, level, tacocat, racecar, etc.).  Notice that each of these words have the same spelling if you 
//reversed the word.
//Using only JavaScript, create a function that takes in a parameter, then create a way to check if the 
//parameter entered is in fact a palindrome.  If it is, have JavaScript console.log that their word is a 
//palindrome; if it is not, have JavaScript console.log the opposite.

function palindrome(name) {
    let words = name.split('').reverse().join('');
    if (words.toUpperCase() === name.toUpperCase()) {
        console.log('This is a palindrome.');
        return true;
    } else {
        console.log('This is not a palindrome.');
        return false;
    }
 }
 
 palindrome('level')

 //editing file