const spacesAvailable = (characters, trueLength) => {
  const spaces = []

  for (let index = 0; index < trueLength; index++) {
    if (characters[index] === ' ') {
      spaces.push(index)
    }
  }

  return spaces
}

const urify = (input, trueLength) => {
  const characters = input.split("")
  
  const spaces = spacesAvailable(characters, trueLength)
  const spaceCount = spaces.length

  const transformedIndex = trueLength + (spaceCount * 2)

  if (transformedIndex === characters.length) {
    for (let index = 0; index < spaces.length; index++) {
      characters[spaces[index]] = '%20'
    }

    return characters.join("").trim()
  }

  return characters.join("")
}

module.exports = {
  urify
}
