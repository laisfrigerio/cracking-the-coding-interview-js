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

}

module.exports = {
  isUnique,
  isUniqueWithoutExtraDataStructure
}
