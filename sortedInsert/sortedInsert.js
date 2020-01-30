/*
Sorted Insert
Given a sorted stack of integers (smallest integer at the top) and an element to insert, write a function – sortedInsert(stack, element) – which inserts the element into the correct position of the stack.
sortedInsert should manipulate the original stack and return the original stack.
The stack will have the methods:
  • isEmpty
  • peek
  • push
  • pop. 
  
You can also use count to view how many elements are in the stack. 
The stack implementation is available to view below.
*/

// the stack class is exposed here for reference, you may or may not utilize additional stacks in your algorithm.

var Stack = function(initialValue) {
    this.store = {};
    this.count = 0;
  
    if (initialValue !== undefined) {
      this.push(initialValue);
    }
  };
  
  Stack.prototype.isEmpty = function() {
    return !this.count;
  };
  
  Stack.prototype.peek = function() {
    return this.store[this.count];
  };
  
  Stack.prototype.push = function(val) {
    this.store[++this.count] = val;
  };
  
  Stack.prototype.pop = function() {
    if (!this.isEmpty()) {
      var tmp = this.store[this.count];
      delete this.store[this.count--];
      return tmp;
    }
  };
  
  function sortedInsert(stack, element) {
    // your code here...
    let found = false;
    let container;
    for (let i in stack.store) {
        if(container) [stack.store[i], container] = [container, stack.store[i]]
        if(stack.store[i] > element && !found){
            container = stack.store[i]
            stack.store[i] = element
            found = true
        }
    }
    if(container) stack.push(container)
    else stack.push(element)
    return stack
  }


  var stack = new Stack(5)
  stack.push(8)
  stack.push(10)
  console.log(stack)
  console.log(sortedInsert(stack, 6))
  console.log(sortedInsert(stack, 0))
  console.log(sortedInsert(stack, 12))