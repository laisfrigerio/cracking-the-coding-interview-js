/*
 * Checking if an input/string has unique values
 * without an extra data structure
*/
const isUniqueWithoutExtraDataStructure = (input) => {
  for (let i = 0; i < input.length; i++) {
    const characterExternal = input[i]
    
    for (let j = (i + 1); j < input.length; j++) {
      const characterInternal = input[j]
      
      if (characterExternal === characterInternal) {
        return false
      }
    }
  }

  return true
}


/*
 * Checking if an input/string has unique values
 * with a usage of extra data structure (object).
 * With this approach we don't need a extra "for"
 * like the previous one example.
*/
const isUnique = (input) => {
  const tempObject = {}

  for (const character of input) {
    
    if (tempObject[character]) {
      return false
    }

    tempObject[character] = true
  }

  return true
}

module.exports = {
  isUnique,
  isUniqueWithoutExtraDataStructure
}
