/*
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!
Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number (you should return all permutations, not only English words).
telephoneWords("0002") // [ "000A", "000B", "000C" ]
telephoneWords("1123") // [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/

var obj = {
  0: ["0"],
  1: ["1"],
  2: ["A", "B", "C"],
  3: ["D", "E", "F"],
  4: ["G", "H", "I"],
  5: ["J", "K", "L"],
  6: ["M", "N", "O"],
  7: ["P", "Q", "R", "S"],
  8: ["T", "U", "V"],
  9: ["W", "X", "Y", "Z"]
};

// function telephoneWords(digitString) {
//     var array = []

//     function insider(str = "",i = 0){
//         if(str.length == digitString.length){
//             array.push(str)
//             return
//         }
//             for (let j = 0; j < obj[digitString[i]].length; j++) {
//                 insider(str + obj[digitString[i]][j], i + 1)
//             }

//     }
//     insider()

//     // digitString = Number(digitString)

//     // your code here...
//     return array
//   }

function telephoneWords(digitString, str = "", i = 0, array = []) {
  if (str.length != digitString.length) {
    for (let j = 0; j < obj[digitString[i]].length; j++) {
      telephoneWords(digitString, str + obj[digitString[i]][j], i + 1, array);
    }
  } else array.push(str);

  return array;
}

console.log(telephoneWords("0002"));
console.log(telephoneWords("1123"));
