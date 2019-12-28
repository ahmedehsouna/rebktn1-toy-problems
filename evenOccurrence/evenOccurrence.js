/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.
evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/


function evenOccurrence(arr){
        var obj = {

        }
        arr.forEach(one => {
            if(obj[JSON.stringify(one)]) obj[JSON.stringify(one)]++
            else obj[JSON.stringify(one)] = 1
        })
        var keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            if(obj[keys[i]] % 2 == 0 && obj[keys[i]] != 0) return keys[i]
            
        }
        return null
 
    

}




console.log(evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ])) // 2
console.log(evenOccurrence([ "cat", "dog", "dig", "cat" ])) // "cat"
console.log(evenOccurrence([[1,2,3], [1,2], [1,2,3]])) // [1,2,3]
console.log(evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) )// {a:1, b:2}