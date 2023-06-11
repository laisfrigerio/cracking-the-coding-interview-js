const { isUniqueWithoutExtraDataStructure } = require("./is-unique")

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
