//Problem 2 Seek & Destroy
/*Define a function called destroyer that will receive as its first parameter an array with numbers,
 then it can receive 1 or more parameters that you need to search in the array and then delete it after
  you finish processing return the resulting array. */

function destroyer(arr, ...values) {
  /* The filter method creates a new array with all elements that pass the test,
     in this case all the elements that are not included in the spread of values of the params.
     After applying the filter, return the array*/
  return arr.filter((num) => !values.includes(num));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //[1,1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); //[1,5,1]
