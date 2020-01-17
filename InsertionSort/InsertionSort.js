// Sort a linked list using insertion sort.
// Algorithm of Insertion Sort:

//1- Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
//2- At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
// 3-It repeats until no input elements remain.

// Example 1:

// Input: 4->2->1->3
// Output: 1->2->3->4
// Example 2:

// Input: -1->5->3->4->0
// Output: -1->0->3->4->5

/**
 * Definition for singly-linked list.
}
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head, modifica = new ListNode(null)) {
    var header = new ListNode(head.val)
    cloudia(modifica)

    function cloudia(iterator, oldIterator = null){
        // console.log(iterator == modifica)

        if(!iterator.val) iterator.val = header.val
        else{
            if(header.val < iterator.val){
                
                header.next = new ListNode(iterator.val)
                iterator = header
                modifica = header
                
                // if(oldIterator) oldIterator.next = header

            }else{
                if(iterator.next) cloudia(iterator.next, iterator)
                else iterator.next = header

            }
        }
        // console.log(modifica, head.next)
    }
    if(head.next) insertionSortList(head.next , modifica)
    // console.log(modifica)
    return modifica
};
        

function ListNode(val) {
    this.val = val;
    this.next = null
}

var head = new ListNode(5)
head.next = new ListNode(8)
head.next.next = new ListNode(3)
console.log(insertionSortList(head))