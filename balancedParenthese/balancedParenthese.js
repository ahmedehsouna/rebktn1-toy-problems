/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().
isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

var isBalanced = function(str) {
var checker = 0
for (let i = 0; i < str.length; i++) {
    if(checker == 0 && str[i] == ')') return false
    if(str[i] == "(") checker++
    if(str[i] == ')') checker--    
}
return checker == 0? true : false
};

console.log(isBalanced("(x + y) - (4)")) //true
console.log(isBalanced("(((10 ) ()) ((?)(:)))"))	// true
console.log(isBalanced("(50)("))	// false
console.log(isBalanced("")) //	true