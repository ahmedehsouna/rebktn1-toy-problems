/*
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.
Explanation:
Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 A -> B -> C -> D -> E -> null
A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over.
This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 A -> B -> C
      ^    |
      |    v
      E <- D
Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes in any way
*/

function Node(val) {
    var obj = {};
    obj.value = val || null;
    obj.next = null;
    return obj;
  }
  
  var hasCycle = function(linkedList) {
    // your code here...
    if(linkedList == null) return false
    try{
        JSON.stringify(linkedList)
        return hasCycle(linkedList.next)
    }catch(err){
        return true
    }
    
};


var linkedList = new Node(5)
linkedList.next = new Node(6)
console.log(hasCycle(linkedList))
var a = linkedList.next
a.next = linkedList
console.log(hasCycle(linkedList))

// if (linkedList == null) return false
// if(tracker[JSON.stringify(linkedList)]) return true
// tracker[JSON.stringify(linkedList)] = linkedList
// return hasCycle(linkedList.next, tracker)
