// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

function Arrayception(array, level=1, deepest = [0]){
for (let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) Arrayception(array[i], level + 1, deepest)
    else deepest[0] = deepest[0] >= level? deepest[0] : level
}
return deepest[0]
}

console.log(Arrayception( [ [ 5 ], [ [ ] ] ]))
console.log(Arrayception( [ 10, 20, 30, 40 ]))
console.log(Arrayception([ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]))
console.log(Arrayception( [ ]))
console.log(Arrayception( [ [ [ ] ] ]))

