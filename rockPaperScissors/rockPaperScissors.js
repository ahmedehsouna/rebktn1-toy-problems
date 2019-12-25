/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/



var rockPaperScissors = function (n) {
    // TODO: your solution here
    var returned = []
    var letters = ["R", "S", "P"]
    var changer = function (str, n) {
        var newStr = ""
        for (let j = 0; j < letters.length; j++) {
            for (let i = 0; i < str.length; i++) {
                    if (i == n) newStr += letters[j]
                    else newStr += str[i]
            }
                if (!returned.includes(newStr)) returned.push(newStr)
                newStr = ""
        }
        }
    var str = ""
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < n; j++) {
            str += letters[i]
        }
        for (let a = 0; a < n; a++) {
            changer(str, a, returned)
        }
        str = ""
    }

    return returned
};
console.log(rockPaperScissors(0))
console.log(rockPaperScissors(1))
console.log(rockPaperScissors(2))
console.log(rockPaperScissors(3))
console.log(rockPaperScissors(4))
console.log(rockPaperScissors(5))