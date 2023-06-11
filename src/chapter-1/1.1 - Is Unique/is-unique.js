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
