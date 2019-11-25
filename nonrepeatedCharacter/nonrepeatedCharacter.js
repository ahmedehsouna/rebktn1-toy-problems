/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
	  // TODO: your solution here
	var firstNonRepeated = ""
	var array = string.split("")
	for (var i = 0; i < array.length; i++) {
	
	var myCheckPoint = array.filter(one => one == array[i])
	if(myCheckPoint.length == 1){
		firstNonRepeated = myCheckPoint[0]
		i = array.length
	}
}
return firstNonRepeated
};

console.log(firstNonRepeatedCharacter('ABA'))
console.log(firstNonRepeatedCharacter('AACBDB'))