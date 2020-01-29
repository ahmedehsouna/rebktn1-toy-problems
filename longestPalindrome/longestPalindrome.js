/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/

function longestPalindrome(string) {
    // your code here...
    let longest = 0;
    let currentLength = 0;
    let currentIt = '';
    let it = '';
    for (let i = 0; i < string.length; i++) {
        let j = i-1
        let k = i+1
        currentLength = 0
        currentIt = string[i]
        let first = string[j]
        let second = string[k] 
        while(first && second && first == second){
         currentIt = first + currentIt + second
         currentLength++
         first = string[--j]
         second = string[++k]
        }
        if(currentLength > longest){
            longest = currentLength
            it = currentIt
        }        
    }
    return it
  }

  console.log(longestPalindrome("My dad is a racecar athlete"))