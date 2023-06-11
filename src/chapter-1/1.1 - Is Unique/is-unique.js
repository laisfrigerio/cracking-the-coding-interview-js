const isUniqueWithoutExtraDataStructure = (s) => {
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (c === s[j]) {
        return false
      }
    }
  }

  return true
}

module.exports = {
  isUniqueWithoutExtraDataStructure
}
