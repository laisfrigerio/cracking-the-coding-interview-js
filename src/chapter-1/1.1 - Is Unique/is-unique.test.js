const { isUniqueWithoutExtraDataStructure } = require("./is-unique")

describe("Checking string has unique characteres without the usage of extra data structure", () => {
    it("should return true when the given string has unique characteres", () => {
        expect(isUniqueWithoutExtraDataStructure("car")).toBe(true)
    })

    it("should return false when the given string doesn't have unique characteres", () => {
        expect(isUniqueWithoutExtraDataStructure("banana")).toBe(false)
    })
})
