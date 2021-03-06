/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  
 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
 class Stack{
     constructor(){
         this.size = 0
         this.array = []
         this.minimum = null
    }

    // add an item to the top of the stack
      push(value) {
          this.minimum = this.minimum? value<this.minimum?value:this.minimum: value
          this.array.push(value)
          this.size += 1
      };
  
    // remove an item from the top of the stack
      pop() {
          this.array.pop()
          this.size--
      };
  
    // return the number of items in the stack
      size() {
            return this.size
      };
    
    // return the minimum value in the stack
      min() {
        return this.minimum
      };
  
    };
  

     var example = new Stack()
      example.push(4)
      example.push(3)
      console.log(example.min() === 3)
      example.push(3)
      example.push(2)
      example.push(2)
      console.log(example.min() === 2)