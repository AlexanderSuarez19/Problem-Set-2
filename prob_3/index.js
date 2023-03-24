//Functions are first class
/*Define a function that given an array “arr”, loop and deletes each element starting from index 0 until the function
 passed as the second parameters returns true when we passed element to it. 
Then returns the array with the remaining elements once the condition has been met otherwise returns an empty array [] */

function firstClass(arr, func) {
  //I use a while loop that goes on as long as the array is not empty and the value of the index 0 of the array doesn't get a true in the function passed as param
  while (arr.length > 0 && !func(arr[0])) {
    //If both conditions are met, the method .shift is used, this method removes the first element from the array, with this i avoid an infinite loop
    arr.shift();
  }
  //At the end, we return the array and there are 2 cases, the first one is that the array is empty because the function was not true at any point
  //And the second case is that the function was true in a loop, in this case the returned array won't have the elements eliminated by the method shift
  //this in the case that the function didn't get a true value in the first loop, if it gets true in the first loop it will return the full array.
  return arr;
}
const arr1 = [1, 2, 3, 4];
const func1 = (n) => n >= 3;

const arr2 = [1, 2, 3, 7, 4];
const func2 = (n) => n > 3;

const arr3 = [0, 1, 0, 1];
const func3 = (n) => n === 1;

const arr4 = [0, 1, 0, 1];
const func4 = (n) => n === 3;

console.log(firstClass(arr1, func1)); // [3, 4]
console.log(firstClass(arr2, func2)); // [7, 4]
console.log(firstClass(arr3, func3)); // [1,0,1]
console.log(firstClass(arr4, func4)); // []
