/*
Spiral Traversal
Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the center.
spiralTraversal([ 
  [ 1, 2, 3, 4, 5 ], 
  [ 6, 7, 8, 9, 10 ], 
  [ 11, 12, 13, 14, 15 ], 
  [ 16, 17, 18, 19, 20 ], 
  [ 21, 22, 23, 24, 25 ] 
]) 
// output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]
spiralTraversal([ 
  [ 1, 2, 3, 4, 5 ], 
  [ 6, 7, 8, 9, 10 ], 
  [ 11, 12, 13, 14, 15 ], 
  [ 16, 17, 18, 19, 20 ], 
  [ 21, 22, 23, 24, 25 ] 
])	
// output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]
spiralTraversal([ 
  [ 1, 2, 3 ], 
  [ 4, 5, 6 ], 
  [ 7, 8, 9 ], 
  [ 10, 11, 12 ], 
  [ 13, 14, 15 ], 
  [ 16, 17, 18 ], 
  [ 19, 20, 21 ], 
  [ 22, 23, 24 ] 
])	
// output: [ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]
spiralTraversal([[ 1 ], [ 2 ], [ 3 ], [ 4 ]])	// [ 1, 2, 3, 4 ]
spiralTraversal([[ 1, 2, 3, 4, 5, 6, 7 ]]) // [ 1, 2, 3, 4, 5, 6, 7 ]
*/


var spiralTraversal = function(matrix, returned =[] , way = "r"){
    if(matrix.length == 0) return
    var falsy = true
    for (let i = 0; i < matrix.length; i++) {
        if(matrix[i].length != 0) falsy = false
    }
    if(falsy) return
    array = JSON.parse(JSON.stringify(matrix))
    if(way == "r"){
        for (let i = 0; i < array[0].length; i++) {
            returned.push(array[0][i])
            
        }
        spiralTraversal(array.slice(1),returned,"d")
    }else if(way == "d"){

        for (let i = 0; i < array.length; i++) {
            returned.push(array[i].pop())
            
        }
        spiralTraversal(array,returned,"l")
    }else if(way == "l"){

        var last = array.length - 1
        for (let i = array[last].length - 1; i >= 0 ; i--) {
            returned.push(array[last][i])
            
        }
        spiralTraversal(array.slice(0,last),returned,"u")
    }else if(way == "u"){
        for (let i = array.length - 1; i >= 0; i--) {
            returned.push(array[i].shift())
            
        }
        spiralTraversal(array,returned,"r")  
    }
return returned
}


console.log(spiralTraversal([ 
    [ 1, 2, 3, 4, 5 ], 
    [ 6, 7, 8, 9, 10 ], 
    [ 11, 12, 13, 14, 15 ], 
    [ 16, 17, 18, 19, 20 ], 
    [ 21, 22, 23, 24, 25 ] 
  ])) 
  // output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]
  console.log(spiralTraversal([ 
    [ 1, 2, 3, 4, 5 ], 
    [ 6, 7, 8, 9, 10 ], 
    [ 11, 12, 13, 14, 15 ], 
    [ 16, 17, 18, 19, 20 ], 
    [ 21, 22, 23, 24, 25 ] 
  ]))	
  // output: [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]
  console.log(spiralTraversal([ 
    [ 1, 2, 3 ], 
    [ 4, 5, 6 ], 
    [ 7, 8, 9 ], 
    [ 10, 11, 12 ], 
    [ 13, 14, 15 ], 
    [ 16, 17, 18 ], 
    [ 19, 20, 21 ], 
    [ 22, 23, 24 ] 
  ]))	
  // output: [ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]
  console.log(spiralTraversal([[ 1 ], [ 2 ], [ 3 ], [ 4 ]]))	// [ 1, 2, 3, 4 ]
  console.log(spiralTraversal([[ 1, 2, 3, 4, 5, 6, 7 ]])) // [ 1, 2, 3, 4, 5, 6, 7 ]
  