/**
 * *Given a string, write a function that uses a stack to reverse the string.
 * *The function should return the reversed string. 
 */

function  reverseString(s) {
    // Create a stack to hold chars of string
    const stack = [];
    let myString = "";

    // push chars into the stack, then pop each char off the stack into a new string
    for (const char of s) {
        stack.push(char);
    }

    while (stack.length !== 0) {
        const myChar = stack.pop()
        myString += myChar;
    }
    return myString;
}

// Test the reverseString method with different input strings and print the results
console.log(reverseString("Hello, World!"));  // Output: "!dlroW ,olleH"
console.log(reverseString("OpenAI"));  // Output: "IAnepO"
console.log(reverseString("Stacks are fun!"));  // Output: "!nuf era skcatS"