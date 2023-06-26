const { urify } = require("./urify")

describe("replacing empty spaces", () => {
  it("should replace the empty space with %20", () => {
    expect(urify("ban ana  ", 7)).toBe("ban%20ana")
    expect(urify("Hi, Ana. How are you?        ", 21)).toBe("Hi,%20Ana.%20How%20are%20you?")
    expect(urify("the house is green      ", 18)).toBe("the%20house%20is%20green")
  })

  it("should noy replace the empty space with %20", () => {
    expect(urify("ban ana ", 7)).toBe("ban ana ")
    expect(urify("Hi, Ana. How are you?", 21)).toBe("Hi, Ana. How are you?")
  })
})
