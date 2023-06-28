const urify = (input, realSize) => {
  const arrayInput = input.split("")
  
  let spaceCount = 0

  for (let i = 0; i < realSize; i++) {
    if (arrayInput[i] === ' ') {
      spaceCount++
    }
  }

  let index = realSize + (spaceCount * 2)

  if (index === arrayInput.length) {
    for (let i = realSize - 1; i >= 0; i--) {
      if (arrayInput[i] === ' ') {
        arrayInput[index - 1] = '0'
        arrayInput[index - 2] = '2'
        arrayInput[index - 3] = '%'
        index = index - 3
      } else {
        arrayInput[index-1] = arrayInput[i]
        index--
      }
    }
  }

  return arrayInput.join("")
}

module.exports = {
  urify
}
