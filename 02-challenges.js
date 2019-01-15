/* ***********************
Challenge Assessment 2
***********************

Example:
Using JS only, take an array of numbers (i.e. an array that lists numbers between 1 and 10).  Create two arrays from this original one, where one array list all of the even numbers, and the second lists all of the odd.
Input:
originalArray = [1,2,3,4];
Output:
evenArray = [2,4];
oddArray = [1,3];
*/

var evenSteven = [];  //establishing even numbers
var oddBalls = [];    //establishing odd numbers

function divorceOddsFromEvens(value) {  //establishing the values
    if ( value % 2 ) {
        oddBalls.push(value);
    }
    else {
        evenSteven.push(value);
    }
}

var arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  //array of numbers to be considered

arrayNums.forEach(divorceOddsFromEvens);

console.log("These are the evil evens", evenSteven); 
console.log("These are the nasty odds", oddBalls); 
