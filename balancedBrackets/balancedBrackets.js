

/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).
isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/
var isBalanced = function(str) {
    var bracket = arguments[1] || null
    var checker = arguments[1]? 1 : 0;
    var close = bracket == "("? ")" : bracket == "{"? "}" : bracket == "["? "]" : null
    var i =0
    console.log(bracket , checker)
    for ( i = 0; i < str.length; i++) {
        if(str[i] == "(" || str[i] == "{" || str[i] == "["){
            var callAgain = isBalanced(str.slice(i+1) , str[i])
            i += callAgain[1] 
            if(!callAgain[0]) return false
        } 
        // console.log(str[i])
        if(str[i] == close && str[i] != null) checker--
    }
    return arguments[1]? [checker == 0 , i+1] : checker == 0
}



// var isBalanced = function(str) {
//     var obj = {
//         ["("] : 0,
//         ["{"] : 0,
//         ["["] : 0
// } 

//     for (let i = 0; i < str.length; i++) {
        
//         if(obj[str[i]] == 0 || obj[str[i]] ) obj[str[i]]++
//         if(str[i] == ")"){
//            if(obj["("] == 0 || obj["{"] || obj["["]) return false
//             obj["("]--
        
//         }
//         if(str[i] == "}"){
//            if(obj["{"] == 0 || obj["("] || obj["["]) return false
//            obj["{"]--
//         }
//         if(str[i] == "]"){
//             if(obj["["] == 0 || obj["{"] || obj["("]) return false
//             obj["["]--
//         }
//     }
//     console.log(obj)
//     return !(!!obj["("] || !!obj["{"] || !!obj["["])
//     };

    // doesn't work
    
    // console.log(isBalanced("(x + y) - (4)")) //true
    console.log(isBalanced("(((10 ) ()) ((?)(:)))"))	// true
//     console.log(isBalanced("(50)("))	// false
//     console.log(isBalanced("")) //	true

// console.log(isBalanced("(x + y) - (4)")) // true
// console.log(isBalanced("(((10 ) ()) ((?)(:)))")) // true
// console.log(isBalanced("(50)(")) // false
// console.log(isBalanced("[{]}")) // false
// console.log(isBalanced("{}()[]")) // true
// console.log(isBalanced("[{()}]")) // true
