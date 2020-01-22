/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  };

  function resize(storage, storageLimit, size){
    if(size/storageLimit[0] == 3/4) {
        var holder = []
        storageLimit[0] *= 2
        storage.forEach(one => {
            if(one){
                one.forEach(second => {
                    var index = getIndexBelowMaxForKey(second[0],storageLimit[0])
                    if(!holder[index]) holder[index] = []
                    holder[index].push([second[0],second[1]])
                })
            }
        })
        // console.log(holder)
     storage = holder   
    }else if(size/storageLimit == 1/4 && storageLimit[0] > 4){
        // console.log("reached")
        var holder = []
        storageLimit[0] /= 2
        storage.forEach(one => {
            if(one){
                one.forEach(second => {
                    var index = getIndexBelowMaxForKey(second[0],storageLimit[0])
                    if(!holder[index]) holder[index] = []
                    holder[index].push([second[0],second[1]])
                })
            }
        })
     storage = holder 
    }
}
  
  var makeHashTable = function() {
    var result = {};
    var storage = [];
    var storageLimit = [4];
    var size = 0;
    
    result.insert = function(key,val) {
      // TODO: implement `insert`
      var index = getIndexBelowMaxForKey(key,storageLimit[0])
      if(!storage[index]) storage[index] = []
      storage[index].push([key,val])
      size++
      resize(storage,storageLimit, size)
    };
  
    result.retrieve = function(key) {
      // TODO: implement `retrieve`
      var index = getIndexBelowMaxForKey(key,storageLimit[0])
      if(!storage[index]) return null
      for (let i = 0; i < storage[index].length; i++) {
          if(storage[index][i][0] == key) return storage[index][i][1]
      }
    };
  
    result.remove = function(key) {
      // TODO: implement `remove`
      var index = getIndexBelowMaxForKey(key,storageLimit[0])
      if(!storage[index]) return null
      for (let i = 0; i < storage[index].length; i++) {
          if(storage[index][i][0] == key){
              console.log(storage[index])
              size--
              var returned = storage[index].splice(i,1)
              resize(storage,storageLimit, size)
              return returned
          } 
      }
    };
    
  
    return result;
  };



  var tester = makeHashTable()
  tester.insert("a", "man")
  tester.insert("car", "one")
  tester.insert("lo", "two")
  tester.insert("hey", "three")
  tester.insert("yo", "four")


  console.log(  tester.retrieve("a"))
  console.log(  tester.retrieve("a"))

  console.log(  tester.remove("a"))
  console.log(  tester.remove("car"))

  console.log(  tester.retrieve("a"))
  console.log(  tester.retrieve("car"))
  console.log(  tester.retrieve("lo"))
  console.log(  tester.retrieve("hey"))
  console.log(  tester.retrieve("yo"))
