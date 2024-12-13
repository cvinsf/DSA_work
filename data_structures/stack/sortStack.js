/**
 ** Problem - Given a stack, sort it using only stack operations (push and pop).
 * Approach - Use a temp stack as as aux storage. Pop off last element from input stack
 * (1) - Run a loop: while temp stack is non-empty and the top of the temp stack is greater than the popped element, keep adding to temp stack.
 * (2) - If the top element from OG stack is > top of tempstack, push all temp stack elements back to OG stack until a smaller element is found
 * (3) - Continue this process until all elements are sorted. 
 ** Time Complexity - O(N^2)
 ** Space Complexity - O(N)
 * 
*/

function sortStack(stack) {
    // Create temp stack for sorting
    const tempStack = [];

    // Loop through input stack until its empty
    while (stack.length !== 0) {
        // Placeholder for element popped off stack
        let temp = stack.pop();

            // While the temporary stack is not empty and the top element
            // of the temporary stack is greater than the current element,
            // push elements from the temporary stack back to the original stack.        
        while (tempStack !== 0 && tempStack[tempStack.length - 1] > temp) {
            stack.push(tempStack.pop())
        }
        // Push current element into temp stack in sorted order
        tempStack.push(temp);
    }
    return tempStack;
}

let stack = [34, 3, 31, 98, 92, 23];
console.log("Input: ", stack);

// Call the sorting function and display the sorted output.
console.log("Sorted Output: ", sortStack(stack));