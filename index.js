// que 1 //

// let number = 12345;
// let lastDigit = number % 10;
// let firstDigit = 0;

// while (number >= 10) {
//     number = Math.floor(number / 10);
// }

// firstDigit = number;

// let sum = firstDigit + lastDigit;
// console.log("sum of firstdigit and lastdigit is: " + sum);

// que 2 //

// let number = 12345;

// let count = 0;

// while (number !== 0) {
//     number = Math.floor(number / 10);
//     count++;
// }

// console.log("Count is: " + count);

// que 3 //

// let fibSequence;
// function printFibonacciSequence(n) {
//     fibSequence = [];

//     if (n >= 1) {
//         fibSequence.push(0);
//     }
//     if (n >= 2) {
//         fibSequence.push(1);
//     }

//     for (let i = 2; i < n; i++) {
//         fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
//     }

//     return fibSequence;
// }


// let numberOfTerms = 10;

// let fibonacciSequence = printFibonacciSequence(numberOfTerms);
// console.log("fibonacci sequence is: " + fibonacciSequence.join(", "));

// que 4 //

// function isArmstrongNumber(num) {

//     let numStr = num.toString();
//     let numDigits = numStr.length;
//     let sum = 0;

//     for (let i = 0; i < numDigits; i++) {
//         let digit = parseInt(numStr.charAt(i));
//         sum += Math.pow(digit, numDigits);
//     }

//     return sum === num;
// }

// let number = prompt("enter your Number: ");
// number = parseInt(number);

// if (isArmstrongNumber(number)) {
//     console.log(number + "it's a armstrong number ");
// } else {
//     console.log(number + " not a armstrong number");
// }

// que 5 //

function isPalindromeNumber(num) {

    let numStr = num.toString();

    let reversedNumStr = numStr.split('').reverse().join('');

    let reversedNum = parseInt(reversedNumStr);

    return num === reversedNum;
}

let number = prompt("enter your Number: ");
number = parseInt(number);

if (isPalindromeNumber(number)) {
    console.log(number + "this is a palindrome number");
} else {
    console.log(number + "this is not a palindrome number");
}
