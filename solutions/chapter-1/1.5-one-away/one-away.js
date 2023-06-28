function firstStringIsLess(string1, string2) {
  return (string1.length + 1) === string2.length
}

function firstStringIsGreater(string1, string2) {
  return (string1.length - 1) === string2.length
}
 
function oneEditReplace(string1, string2) {
	let foundDifferent = false

	for (let index = 0; index < string1.length; index++) {
		if (string1[index] !== string2[index]) {
			if (foundDifferent) {
				return false
			}

			foundDifferent = true
		}
	}

	return true
}
  
function onAddOrRemove(string1, string2) {
	let index1 = 0
	let index2 = 0

	while (index2 < string2.length && index1 < string1.length) {
		if (string1[index1] !== string2[index2]) {
			if (index1 !== index2) {
				return false
			}

			index2++
			continue
		}

		index1++
		index2++
	}


	return true
}
  
function oneAway(string1, string2) {
	if (string1.length === string2.length) {
		return oneEditReplace(string1, string2)
	}

	if (firstStringIsLess(string1, string2)) {
		return onAddOrRemove(string1, string2)
	}

	if (firstStringIsGreater(string1, string2)) {
		return onAddOrRemove(string2, string1)
	}

	return false
}

module.exports = {
	oneAway
}
  