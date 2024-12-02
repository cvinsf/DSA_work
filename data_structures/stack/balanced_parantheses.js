/**
 * Given a string (s) containing (, ), [, ], {, and } characters. 
 * Determine if a given string of parentheses is balanced.
 * @param {string} s - The string to check
 * @return {boolean} - Returns true if balanced, false otherwise
 */

// Naive solution
function balancedParentheses(s) {
    // create an empty stack
    const myStack = [];
    // iterate over the chars in string
    for (const char of s) {
        // if current char is opening parans, push onto stack
        if (char === "[" ||char === "{" || char === "(") {
            myStack.push(char);
        }
        // if current char is closing parans, check top of stack
       else {
           // if stack is empty string is not balanced
        if (!myStack.length) return false;
        
        // if top of stack is matching, pop off the stack
        let top = myStack.pop();
        // if top of stack not matching, return false
        if (char === "]" && top !== '[') return false;
        if (char === "}" && top !== '{') return false;
        if (char === ")" && top !== '(') return false;

    }

    }
    // after iterating, if stack is empty string is balanced, if stack is not empty return false
    return !myStack.length;
}

// Optimal solution
function opimalBalancedParans(s) {
    const stack = [];
    const matchingBrackets = {
        ')' : '(',
        ']' : '[',
        '}' : '{',
    }

    for (const char of s) {
        // If it's an opening bracket, push it onto the stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            // If it's a closing bracket, check if it matches the top of the stack
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false; // Unbalanced if no match or stack is empty
            }
        }
    }
    // If stack is empty, all brackets were matched; otherwise, it's unbalanced
    return stack.length === 0;
}

let test1 = "{[()]}"; // Should be valid
let test2 = "{[}]";   // Should be invalid
let test3 = "(]";     // Should be invalid

console.log("Test 1:", balancedParentheses(test1));
console.log("Test 2:", balancedParentheses(test2));
console.log("Test 3:", balancedParentheses(test3));


console.log("Test 1:", opimalBalancedParans(test1));
console.log("Test 2:", opimalBalancedParans(test2));
console.log("Test 3:", opimalBalancedParans(test3));
