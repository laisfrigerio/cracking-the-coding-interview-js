function isMod (input) {
  return input % 2 === 0
}

function incremet (input) {
  return input + 1
}

function isEmpty (input) {
  return input === ' '
}

function assoc (map, key) {
  map[key] = 1
}

function updateOddQuantity (input, oddQuantity) {
  if (isMod(input)) {
    return oddQuantity - 1
  }

  return oddQuantity + 1
}

function palindrome (input) {
  let characterHashMap = {}
  let oddQuantity = 0;

  for (let i = 0; i < input.length; i++) {
    const character = input[i].toLowerCase()

    if (isEmpty(character)) {
      continue
    }

    if (characterHashMap[character]) {
      characterHashMap[character] = incremet(characterHashMap[character])
      oddQuantity = updateOddQuantity(characterHashMap[character], oddQuantity)
      continue
    }

    assoc(characterHashMap, character)
    oddQuantity = incremet(oddQuantity)
  }

  return oddQuantity < 2
}

module.exports = {
  palindrome
}
