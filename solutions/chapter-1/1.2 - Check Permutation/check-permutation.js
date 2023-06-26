/*
 * This solution sounds more simple, but the Big O complexity is greater

   - First, the spread operator is probably a loop behind the scenes
   
   - To sort, we need to loop through the elements, 
     and depend of the sort algorithm, it can take a lot of time to complete

   - Finally, we have to iterate again to join the array into string

   Also, we have a extra use of memory space compare to the checkPermutation function
 */
const checkPermutationOrdered = (setence1, setence2) => {
  if (setence1.length !== setence2.length) {
    return false
  }

  const sentence1Ordered = [...setence1].sort().join('')
  const sentence2Ordered = [...setence2].sort().join('')

  return sentence1Ordered === sentence2Ordered
}

/*
 * Firstly, Strings with different sizes are not permutation one for other.

   If they are the same size, we can check with all the characters 
   from string 1 exists in the string 2
 */
const checkPermutation = (setence1, setence2) => {
  if (setence1.length !== setence2.length) {
    return false
  }

  for (const character of setence1) {
    if (!setence2.includes(character)) {
      return false
    }
  }

  return true
}

module.exports = {
  checkPermutation,
  checkPermutationOrdered
}
