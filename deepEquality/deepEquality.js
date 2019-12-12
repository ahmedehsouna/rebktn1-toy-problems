/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  if(!Array.isArray(apple))
  apple = Object.entries(apple)
  if(!Array.isArray(orange))
  orange = Object.entries(orange)
  if(!(apple.length == orange.length)) return false 
    for (var i = 0; i < apple.length; i++) {
      if(Array.isArray(apple)){
      if(typeof (apple[i]) == "object"){
        if(!deepEquals(apple[i], orange[i])) return false
      }else if(apple[i] != orange[i]) return false 
      }else{
      if(typeof (apple[i][1]) == "object"){
        if(!deepEquals(apple[i][1], orange[i][1])) return false
      }else if(apple[i][0] != orange[i][0] || apple[i][1] != orange[i][1]) return false        
      }


      
    }
  return true
  // return JSON.stringify(apple) == JSON.stringify(orange)
};

  console.log( deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); //true
  console.log( deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); //false
  console.log( deepEquals({a:[1,2,{g:3}], b: {c:3}},{a:[1,2,{f:3}], b: {c:3}})); //deeep false lol
