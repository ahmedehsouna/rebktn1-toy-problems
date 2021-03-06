/*
Number to English
Write a function numberToEnglish, it should take a number and return the number as a string using English words.
numbertoEnglish(7) // "seven"
numberToEnglish(575) // "five hundred seventy-five"
numberToEnglish(78193512) // "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*/

// HELPERS

var numbersToWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  };
  
  var numbersToPlace = {
    10: 'ten',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    1000000000000: 'trillion',
    1000000000000000: 'quadrillion',
    1000000000000000000: 'quintillion'
  };
  
  function numberToEnglish(number) {
    // your code here...
    number = String(Math.round(number))
    if(number < 20)  return numbersToWords[number]
    else if (number < 100) return `${numbersToWords[number[0] + "0"]}${number[1] != "0"?'-' + numbersToWords[number[1]] : ""}`
    else {
        var keys = Object.keys(numbersToPlace)
        var val = (()=>{
        var returned = 0
        for (let i = 0;i < keys.length; i++) {
            if(Number(number) >  keys[i]) returned = keys[i]
            else return returned
        }
    })()
    var firstPart = parseInt(Number(number) / val)
    var secondPart = (Number(number) / val - firstPart) * val
   return `${numberToEnglish(firstPart)} ${numbersToPlace[val]} ${numberToEnglish(secondPart)}`
    }   
  }


  console.log(numberToEnglish(7)) // "seven"
  console.log(numberToEnglish(79)) // "seventy-nine"
  console.log(numberToEnglish(90)) // "ninety"

  console.log(numberToEnglish(575)) // "five hundred seventy-five"
  console.log(numberToEnglish(78193512)) // "seventy-eight million one hundred ninety-three thousand five hundred twelve"
