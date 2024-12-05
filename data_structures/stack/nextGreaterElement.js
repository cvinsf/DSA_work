/**
 **Given an array, print the Next Greater Element (NGE) for every element.
 **The Next Greater Element for an element x is the first greater element on the right side of x in the array.
 **Elements for which no greater element exist, consider the next greater element as -1.
 * @param {arr: array}
 * @return {arr: array}
 */

 function nextGreaterElement(arr) {
    const stack = [];
    const res = new Array(arr.length).fill(-1);

    // Iterate through array from right to left
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        // While the stack is non-empty and the element at the top is less than curr
        // pop the top of the stack off
        while (stack.length && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        } // If the stack has remaining elements, that means the curr top of stack
        // is larger than the curr element and is the NGE.
        if (stack.length > 0) {
            res[i] = stack[stack.length - 1];
        }
        // Pushing curr element onto the stack
        stack.push(arr[i]);
    }
    return res;
 }

 // Test Cases
 console.log(nextGreaterElement([4, 5, 2, 25])); // [5, 25, 25, -1]
console.log(nextGreaterElement([13, 7, 6, 12])); // [-1, 12, 12, -1]
console.log(nextGreaterElement([1, 2, 3, 4, 5])); // [2, 3, 4, 5, -1]