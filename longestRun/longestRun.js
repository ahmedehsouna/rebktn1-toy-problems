/*
Longest Run
Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.
longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

function longestRun(string) {
    var data = []
    var letter = ""
    var indexes = [0,0]
    for (var i = 0; i < string.length; i++) {
        if(letter != string[i]){
        indexes.push(i == 0?0:i-1)
        data.push(indexes.slice())
        indexes[1] = i
        indexes[0] = 1
        indexes.pop()
        letter = string[i]
        } else {
            indexes[0]++
        }
}
indexes.push(i == 0?0:i-1)
data.push(indexes)
var max = 0;
var returned = [0,0]
for (var j = 0; j < data.length; j++) {
    // console.log(data[j] , max, data[j] && max < data[j][0])
    if(data[j] && max < data[j][0]){
        // console.log("entered")
        max = data[j][0]
        returned = [data[j][1] , data[j][2]]
    }    
}
return returned
}

// var obj ={}
// var letter = ""
// for (let i = 0; i < string.length; i++) {
//     if(!obj[string[i]]){
//         obj[string[i]] = {number : 1 , index : [i]} 
//         letter = string[i]
//     }else if(letter == string[i]){
//         obj[string[i]].number++
//     }else {
//         letter = obj[string[i]]
//     } 
// }
// return obj
console.log(longestRun("ab")) // [ 0, 0 ]

console.log(longestRun("mississippi")) // [ 2, 3 ]
console.log(longestRun("abcdefgh")) // [ 0, 0 ]
console.log(longestRun("abccccccc")) // [ 2, 8 ]
console.log(longestRun("abbbcc")) // [ 1, 3 ]
console.log(longestRun("aabbc")) // [ 0, 1 ]
console.log(longestRun("")) // [ 0, 0 ]

// var letter ="";
// var length = 0;
// var mainLength =0;
// var index =0;
// var mainIndex = 0;
// var end =0;
// for (let i = 0; i < string.length; i++) {
//     if(letter == ""){
//         letter = string[i]
//         index = i
//         length++
//     }else if(string[i] == letter){
//         length++
//     }else if(mainLength > length){
        
//     }else{

//     } 
// }
// return