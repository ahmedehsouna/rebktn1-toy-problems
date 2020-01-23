/*
Write a function that reverses a linked list.
Explanation:
Given the below linked list:
	A -> B -> C -> D -> E -> null
Return:
	E -> D -> C -> B -> A -> null
Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes by adding any new properties
*/
// Helpers
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null; 
  return obj;
}
var reverseLinkedList = function(linkedList) {
	var node = linkedList
    var returned = null
    while(node){
		if(!returned){
			returned = new Node(node.value)
        }else {
			var dot = new Node(node.value)
            dot.next = returned
            returned = dot
		}
        node = node.next  
    }
    return returned

};


var linked = new Node(1)
linked.next = new Node(2)
linked.next.next = new Node(21)

console.log(reverseLinkedList(linked))
