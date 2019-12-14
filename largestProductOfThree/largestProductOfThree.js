/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
    arr = array.sort((a,b) => Math.abs(a) - Math.abs(b))
    var i = arr.length -1
    let temp = [arr[i-2] , arr[i-1] , arr[i]]
    var firstPos;
    var firstNeg;    
    var prod = arr[i] * arr[i-1] * arr[i-2]
    if(prod == Math.abs(prod) || arr.length == 3 ) return prod
    var i = arr.length - 4 
    while (i>=0 && (firstNeg == undefined || firstPos == undefined)) {
        if(arr[i] == Math.abs(arr[i]) && firstPos == undefined) firstPos = arr[i] 
        if(arr[i] != Math.abs(arr[i]) && firstNeg == undefined) firstNeg = arr[i] 
        i--
    }
    var prod1 = exchange(temp, firstPos, prod, true)
    var prod2 = exchange(temp, firstNeg, prod, false)
return prod > prod2 && prod>prod1? prod : prod1>prod2?prod1:prod2
}

function exchange(arr, n ,prod, positive){
    var prod1 = 1
    var done = false
    if( positive){
        for (i = 0; i < arr.length; i++) {
            if(arr[i] != Math.abs(arr[i]) && !done){
                prod1 *= n 
                done = true
            }else prod1 *= arr[i]
            
        }
    if(prod1 != 1) return prod1 
    }
    if(!positive){
        for (i = 0; i < arr.length; i++) {
            if(arr[i] == Math.abs(arr[i]) && !done){
                prod1 *= n 
                done = true
            }else prod1 *= arr[i]
            
        }
    if(prod1 != 1) return prod1 
    }
}

console.log(largestProductOfThree([ 2, 1, 3, 7 ]))
console.log(largestProductOfThree([ 0,2, 3 ]))
console.log(largestProductOfThree([ 1, 4, -5,-2 , 6])) // output 60
console.log(largestProductOfThree([1, 4, -5, -2]))
console.log(largestProductOfThree([3, -4, -5, 7,8])) //output 168