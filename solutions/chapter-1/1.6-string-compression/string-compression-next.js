function stringCompression (input) {
    const inputLength = input.length
    let result = ""
    let count = 0
  
    for (let index = 0; index < inputLength; index++) {
      const currentCharacter = input[index];
      count++
      
      if (input[index + 1] !== currentCharacter) {
        result = `${result}${currentCharacter}${count}` 
        count = 0
      }
    }

    return result.length > inputLength
            ? input
            : result
                
  }
  
  module.exports = {
    stringCompression
  }
  