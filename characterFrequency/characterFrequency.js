/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.
characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
characterFrequency("") -->  [ ]
*/

var characterFrequency = function(str){
var obj = {}
for (var i = 0; i < str.length; i++) {
	if(obj[str[i]]) obj[str[i]]++
	else obj[str[i]] = 1
}
return Object.entries(obj)
}

console.log(characterFrequency("mississippi"))