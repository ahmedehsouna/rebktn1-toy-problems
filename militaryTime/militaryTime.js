/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).
Examples: 
toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

// function toMilitary(time) {
//     // your code here...
//     var newTime = ''
//     if(/pm/.test(time)){
//         if(/pm/.test(time)) time = (time.replace('pm' , ""))
//         for (let i = 0; i < time.length; i++) {
//             if(time[i] == ':')
//             newTime = String(Number(newTime) + 12)
//             newTime += time[i]            
//         }

//     } 
//     else if(/am/.test(time)){
//         time = (time.replace('am' , ""))
//         for (let i = 0; i < time.length; i++) {
//             if(time[i] == ':')
//             newTime = Number(newTime) == 12?'00' : Number(newTime) > 9? newTime : "0" + newTime
//             newTime += time[i]            
//         }
//     }else newTime = time
//     // return time
//     return newTime
//   }

function toMilitary(time) {
    if(/pm/.test(time))
    return time.replace(/[0-9_]*/, one => Number(one) + 12 ).replace('pm', '')
    else if(/am/.test(time))
    return time.replace(/[0-9_]*/, one => Number(one) == 12?'00' : Number(one) > 9? one : "0" + one).replace('am', '')
    else return time

}


console.log(toMilitary("3:00pm")) // "15:00"
console.log(toMilitary("9:15am")) // "09:15"
console.log(toMilitary("12:00am")) // "00:00"
console.log(toMilitary("04:00")) // "04:00"