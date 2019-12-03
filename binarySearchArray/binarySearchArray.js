/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
	var start = arguments[2] || 0
	var end   = arguments[3] || array.length -1
	if(start == end) return target == array[start]? start: null
	var mid   =  Math.floor((start + end)/2)
	if(target == array[mid]) return mid
	if(target > array[mid]) return binarySearch(array,target,mid+1,end)
	if(target < array[mid]) return binarySearch(array,target,start,mid-1)
};

  var index = binarySearch([1, 2, 3, 4, 5], 4);
  console.log(index); // 3
  var index = binarySearch([1, 2, 3, 4, 5], 8);
  console.log(index); // null