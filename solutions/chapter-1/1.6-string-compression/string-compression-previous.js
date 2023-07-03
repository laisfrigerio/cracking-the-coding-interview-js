function stringCompression (input) {
  const inputSize = input.length
  const tempObj = {}

  let result = ""
  let previous = ""

  for (let index = 0; index < inputSize; index++) {
    const currentCharacter = input[index];
    
    if (!tempObj[currentCharacter]) {
      tempObj[currentCharacter] = 1
    } else {
      tempObj[currentCharacter]++
    }

    if (previous && previous !== currentCharacter) {
      result = `${result}${previous}${tempObj[previous]}` 
      tempObj[previous] = 0
    } 

    previous = currentCharacter

    if (index === (inputSize - 1)) {
      result = `${result}${currentCharacter}${tempObj[currentCharacter]}` 

      if (result.length > inputSize) {
        result = input
      }
    }
  }

  return result
}

module.exports = {
  stringCompression
}
