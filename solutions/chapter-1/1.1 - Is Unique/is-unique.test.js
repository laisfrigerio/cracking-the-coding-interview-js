const { 
    isUnique,
    isUniqueWithoutExtraDataStructure
} = require("./is-unique")

describe("Checking string has unique characteres without the usage of extra data structure", () => {
    it("should return true when the given string has unique characteres", () => {
        expect(isUniqueWithoutExtraDataStructure("car")).toBe(true)
        expect(isUniqueWithoutExtraDataStructure("setup")).toBe(true)
        expect(isUniqueWithoutExtraDataStructure("keyword")).toBe(true)
        expect(isUniqueWithoutExtraDataStructure("mouse")).toBe(true)
        expect(isUniqueWithoutExtraDataStructure("sunday")).toBe(true)
        expect(isUniqueWithoutExtraDataStructure("monday")).toBe(true)
    })

    it("should return false when the given string doesn't have unique characteres", () => {
        expect(isUniqueWithoutExtraDataStructure("banana")).toBe(false)
        expect(isUniqueWithoutExtraDataStructure("apple")).toBe(false)
        expect(isUniqueWithoutExtraDataStructure("allow")).toBe(false)
        expect(isUniqueWithoutExtraDataStructure("javascript")).toBe(false)
        expect(isUniqueWithoutExtraDataStructure("php")).toBe(false)
        expect(isUniqueWithoutExtraDataStructure("java")).toBe(false)
    })
})

describe("Checking string has unique characteres with a usage of extra data structure", () => {
    it("should return true when the given string has unique characteres", () => {
        expect(isUnique("car")).toBe(true)
        expect(isUnique("setup")).toBe(true)
        expect(isUnique("keyword")).toBe(true)
        expect(isUnique("mouse")).toBe(true)
        expect(isUnique("sunday")).toBe(true)
        expect(isUnique("monday")).toBe(true)
    })

    it("should return false when the given string doesn't have unique characteres", () => {
        expect(isUnique("banana")).toBe(false)
        expect(isUnique("apple")).toBe(false)
        expect(isUnique("allow")).toBe(false)
        expect(isUnique("javascript")).toBe(false)
        expect(isUnique("php")).toBe(false)
        expect(isUnique("java")).toBe(false)
    })
})
