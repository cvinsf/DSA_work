/**
 **Given a positive integer n, write a function that returns its binary equivalent as a string. 
 **The function should not use any in-built binary conversion function.
 */

 function decimalToBinary(num) {
    let binary = "";

    const stack = [];

    while (num > 0) {
        stack.push(num % 2);
        num = Math.floor(num / 2);
    }
    return stack.reverse().join("");
 }

 console.log(decimalToBinary(2));    // Output: "10"
console.log(decimalToBinary(7));    // Output: "111"
console.log(decimalToBinary(18));   // Output: "10010"