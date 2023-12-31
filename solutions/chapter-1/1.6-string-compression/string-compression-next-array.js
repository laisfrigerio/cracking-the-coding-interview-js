function stringCompression (input) {
  const resultArray = []

  let count = 0

  for (let index = 0; index < input.length; index++) {
    const currentCharacter = input[index];
    count++
    
    if (input[index + 1] !== currentCharacter) {
    resultArray.push(currentCharacter)
    resultArray.push(count)
    count = 0
    }
  }

  const resultStr = resultArray.join("")

  return resultStr.length > input.length
          ? input
          : resultStr
}
  
module.exports = {
  stringCompression
}
  