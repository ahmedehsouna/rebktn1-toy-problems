// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

function messUp(str){
str = str.split("")
for (var i = 0; i < str.length; i++) {
	var store = str[i]
	switch(str[i]){
		case "c" : 
		case "o":  str[i] = String.fromCharCode(str[i].charCodeAt() - 1) 
		break;
		case "d" : str[i] = String.fromCharCode(str[i].charCodeAt() - 3)
		break;
		case "e" : str[i] = String.fromCharCode(str[i].charCodeAt() - 4)
		break;
		case "a":
		case "i":
		case "u": str[i] = String.fromCharCode(str[i].charCodeAt() - 5)
		break;
		default : str[i] = String.fromCharCode(str[i].charCodeAt() + 9)
	}
	if(str[i].charCodeAt() < "a".charCodeAt()) str[i] = String.fromCharCode(str[i].charCodeAt() + 26)
	if(str[i].charCodeAt() > "z".charCodeAt()) str[i] = String.fromCharCode(str[i].charCodeAt() - 26)
	if(str[i] == 'c' || str[i] == 'o' || str[i] == 'd' || str[i] == 'e') str[i] = store		


}
return str.join("")
}



console.log(messUp("done"))
