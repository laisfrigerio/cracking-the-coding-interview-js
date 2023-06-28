const {
  oneAway
} = require('./one-away')

test('Checking if is one edit only', () => {
  expect(oneAway('pale', 'ple')).toBe(true)
  expect(oneAway('pales', 'pale')).toBe(true)
  expect(oneAway('pale', 'bale')).toBe(true)
  expect(oneAway('bale', 'bake')).toBe(true)
  expect(oneAway('person', 'persona')).toBe(true)

})

test('Checking if is more than one edit only', () => {
  expect(oneAway('person', 'personas')).toBe(false)
  expect(oneAway('pale', 'bake')).toBe(false)
  expect(oneAway('person', 'curson')).toBe(false)
  expect(oneAway('person', 'pursoni')).toBe(false)
})
