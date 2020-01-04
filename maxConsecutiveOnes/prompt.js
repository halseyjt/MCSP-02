// Write a function that takes in an array of numbers and returns the maximum number of consecutive 1s

//maxConsecutiveOnes([1,1,2,0,3,1,1,1,1,5,6,3]) returns 4

// input: array of numbers 
// output: return the max number of consecutive 1's.
// constraints: ???
// edge cases: empty array, array of only 1's, array of  0's, 

function maxConsecutiveOnes(array) {
  // set current variable equal to 0
  let current = 0;
  // set a maximum variable equal to 0
  let maximum = 0;
  // iterate through the array 
  for (let i = 0; i < array.length; i++){
    // if the array element is equal to 1
    if (array[i] === 1) {
      // increment the current variable
      current++;
      // compare if current variable is larger than the maximum
      if (current > maximum) {
        // set the maximum to the current variable
        maximum = current;
      }  
        // if the array element is equal to 0
      } else if (array[i] === 0) {
        // set current variable equal to zero
        current = 0;
      }
  }
  // return the maximum variable 
  return maximum;
};

let result = maxConsecutiveOnes([1, 1, 2, 0, 3, 1, 1, 1, 1, 5, 6, 3]);

console.log(result);
