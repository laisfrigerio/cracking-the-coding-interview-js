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
  checkPermutation
}
