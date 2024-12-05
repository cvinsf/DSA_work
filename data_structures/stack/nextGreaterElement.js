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

    for (let i = arr.length - 1; i >= 0; i -= 1) {
        while (stack.length && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            res[i] = stack[stack.length - 1];
        }
        stack.push(arr[i]);
    }
    return res;
 }

 // Test Cases
 console.log(nextGreaterElement([4, 5, 2, 25])); // [5, 25, 25, -1]
console.log(nextGreaterElement([13, 7, 6, 12])); // [-1, 12, 12, -1]
console.log(nextGreaterElement([1, 2, 3, 4, 5])); // [2, 3, 4, 5, -1]