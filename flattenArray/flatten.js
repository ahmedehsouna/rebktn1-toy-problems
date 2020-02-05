/*
Given an array of arrays, return all elements in a single array. You must use recursion.
Hint: Use Array.isArray(elem) to see if something is an array.
Example: 
flatten([[1, 1], [4], 3, [3], 4, [6, 7]]) // [1, 1, 4, 3, 3, 4, 6, 7]
*/
function flatten(arr,returned = []) {
    // your code here...
    arr.forEach(one => {
        if(Array.isArray(one)) flatten(one,returned)
        else returned.push(one)
    })
    return returned
  }
// let flattenV1 = require('lodash').flattenDeep
// let flattenV2 = (arr)=> arr.flat()
// let flattenV3 = require('underscore').flatten
console.log(flatten([[1, 1], [4], 3, [3], 4, [6, 7]]))
// console.log(flattenV1([[1, 1], [4], 3, [3], 4, [6, 7]]))
// console.log(flattenV2([[1, 1], [4], 3, [3], 4, [6, 7]]))
// console.log(flattenV3([[1, 1], [4], 3, [3], 4, [6, 7]]))

