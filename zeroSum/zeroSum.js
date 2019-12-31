  
/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.
Constraints: Solve this linear time complexity O(n)
zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/

function zeroSum(array){
    var obj = {}
    for (let i = 0; i < array.length; i++) {
        if(obj[-array[i]]) return true
        if(!obj[array[i]]) obj[array[i]] = true  
    }
    return false
}
console.log(zeroSum([ 1, 3, 2, -3 ])) // true
console.log(zeroSum([ 5, 7, 2, 9 ]))