const { 
  checkPermutation,
  checkPermutationOrdered
 } = require("./check-permutation")

describe("checking for permutations between strings", () => {
  it("should return false because the strings has different lenghts", () => {
    expect(checkPermutation("banana", "apple")).toBe(false)
    expect(checkPermutation("ABC", "DEF")).toBe(false)
    expect(checkPermutation("ABC", "ADC")).toBe(false)
  })
  

  it("should return true because one string is permutation the other", () => {
    expect(checkPermutation("god", "dog")).toBe(true)
    expect(checkPermutation("ABC", "CBA")).toBe(true)
    expect(checkPermutation("BAC", "ABC")).toBe(true)
  })
})

describe("checking for permutations between strings ordering them", () => {
  it("should return false because the strings has different lenghts", () => {
    expect(checkPermutationOrdered("banana", "apple")).toBe(false)
    expect(checkPermutationOrdered("ABC", "DEF")).toBe(false)
    expect(checkPermutationOrdered("ABC", "ADC")).toBe(false)
  })
  

  it("should return true because one string is permutation the other", () => {
    expect(checkPermutationOrdered("god", "dog")).toBe(true)
    expect(checkPermutationOrdered("ABC", "CBA")).toBe(true)
    expect(checkPermutationOrdered("BAC", "ABC")).toBe(true)
  })
})
