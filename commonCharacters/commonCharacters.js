/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var together = ''
  for (var i = 0;i < string1.length; i++) {
  	for (var j=0; j < string2.length ; j++) {
  		if(string1[i] == string2[j]){
  			if(!together.includes(string1[i]) && string1[i] != " ")
  			together += string1[i]
  			break;
  		}
  	}
  }
  if (arguments.length > 2) {
  	   delete arguments[0]
  	   delete arguments[1]
  	   arguments = Object.values(arguments)
  	   return commonCharacters(together, ...arguments)

  }
  return together
};

console.log(commonCharacters('acexivoua', 'aegihobu'))
console.log(commonCharacters('acexivoua', 'aegihobu' , 'magic', 'dharma'))