/*******************************************************************
While you are working on the following problems, it DEFINITELY HELPS to
visualize these things in action, so use the below arrays as example inputs.

[1, 2, 3, 4, 5, 6, 7, 8, 9]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*******************************************************************/


/*******************************************************************
BINARY SEARCH VERSION 1:

Write a Recursive Binary Search that returns a Boolean value indicating if
targetNum is within the nums array.
*******************************************************************/

const recurBSearch = (nums, targetNum) => {
  if (nums.length === 0) {
    return false;
  }
  
  let mid = Math.floor(nums.length / 2);
  console.log("mid", mid)
  
  let rightHalf = nums.slice(mid + 1);
  console.log("rightHalf", rightHalf)
  let leftHalf = nums.slice(0, mid);
  console.log("leftHalf", leftHalf)
  
  if (targetNum < nums[mid]){
    return recurBSearch(leftHalf, targetNum)
  }

  else if (targetNum > nums[mid]){
    return recurBSearch(rightHalf, targetNum)
  }

  else {
    return true;
  }
  // return false;
}


// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]



// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // recurBSearch(arr1, 8)
// console.log("recurBSearch(arr1, 8)", recurBSearch(arr1, 10))

/*******************************************************************
BINARY SEARCH VERSION 2:

Write an Iterative Binary Search that returns a Boolean value indicating if
targetNum is within the nums array.
*******************************************************************/

const iterBSearch = (nums, targetNum) => {
  // Save references to the beginning, middle, and end of the array into
  // variables: lowerIdx, midIdx, and upperIdx
  let lowerIdx = 0
  let midIdx 
  let upperIdx = nums.length

  // while the lowerIdx is less than or equal to the upperIdx, there are still
  // values to be searched
  for(let i = lowerIdx; i <= upperIdx; i++){
    // reassign the midIdx to the the middle of the new lower and upper indices 
    midIdx = Math.floor((lowerIdx + upperIdx) / 2)


  // if targetNum is larger than the value in the middle, we know targetNum is
  // not between the current lower and current middle, so raise the lowerIdx
  // value
    if(targetNum > nums[midIdx]){
      lowerIdx = midIdx + 1
    }

  // if targetNum is less than the value in the middle, we know targetNum is not
  // between the current upper and current middle, so lower the upperIdx 
    else if(targetNum < nums[midIdx]){
      upperIdx = midIdx
    }

  // if it's not greater than or less than, we have found our target at the
  // midIdx and can return true and stop iterating.
    //
    else if(targetNum === nums[midIdx]) {
      return true
    }
  }

  // if we finish iterating and haven't returned true, we've looked over the
  // entire array and didn't find targetNum, so return false 
  return false
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]



let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("iterBSearch(arr1, 6)", iterBSearch(arr1, 10))

/*******************************************************************
BINARY SEARCH VERSION 3:

Write a Recursive Binary Search that returns the Index value of targetNum if it
is in the nums array, and -1 if it is not found.
*******************************************************************/

const recurBSearchIdx = (nums, targetNum) => {
  // this implementation is identical to version 1, except rather than
  // returning true/false, return the index where you found the item
  // (instead of true) or -1 (instead of false).

  // HINT: the index value you return should be the index in the ORIGINAL array
  // and not the index of the sliced array. Think about how you can calculate
  // this.
}


/*******************************************************************
BINARY SEARCH VERSION 4:

Write a Recursive Binary Search that returns the Index value of targetNum if it
is in the nums array, and -1 if it is not found.
*******************************************************************/

const recurBSearchIdxV2 = (nums, targetNum, low = null, hi = null) => {
  /*
  This implementation is recursive, but borrows the low/hi logic from Version 2
  to establish a different base case. Rather than shrinking the array until its
  length is 0, this implementation passes in low and hi indices to determine
  what part of the original array is being searched.

  Base Case: 
  if low is equal to high and we haven't found targetNum, then return -1 to
  indicate that the value was not found
  
  Determine the slice point (the middle of lower and upper)

  If targetNum is less than nums[slicepoint], then
  return the binary search of nums passing in low and hi pointing at the
  'left' half of the array

  If targetNum is less than nums[slicepoint], then
  return the binary search of nums passing in low and hi pointing at the
  'right' half of the array

  If neither of those is true, return the slice point
  */
}


/*******************************************************************
BINARY SEARCH VERSION 5:

Write an Iterative Binary Search that returns the Index value of targetNum if
it is in the nums array, and -1 if it is not found.
*******************************************************************/

const iterBSearchIdx = (nums, targetNum) => {
  // this is the exact same as Version 2, but return the index or -1 rather than
  // true or false
}

module.exports = {
  recurBSearch,
  iterBSearch,
  recurBSearchIdx,
  recurBSearchIdxV2,
  iterBSearchIdx
};
