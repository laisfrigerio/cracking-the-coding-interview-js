const {
  palindrome
} = require('./palindrome')

test('Checking is a palindrome permutation', () => {
  expect(palindrome('Tact Coa')).toBe(true)
  expect(palindrome('civic')).toBe(true)
  expect(palindrome('ivicc')).toBe(true)
  expect(palindrome('aabbcadad')).toBe(true)
  expect(palindrome('ttpkkp')).toBe(true)
  expect(palindrome('civil')).toBe(false)
  expect(palindrome('livci')).toBe(false)
})

test('Checking isn\'t a palindrome permutation', () => {
  expect(palindrome('civil')).toBe(false)
  expect(palindrome('livci')).toBe(false)
})
