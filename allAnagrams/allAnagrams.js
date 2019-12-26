/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(string) {
    // Your code here.
    var array = []
    function pusher(word){
        
        

        if(word.length == string.length){
            return array.push(word)
        }

    string.split("").forEach(one => {
        if(!word.includes(one))
        pusher(word + one)
        })

    }
    pusher("")
    return array
  };

   var anagrams = allAnagrams('abc');
   console.log(anagrams);