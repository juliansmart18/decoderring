const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests written by Julian", ()=>{
    it("should translate i and j to 42 when encoding", ()=>{
        const message = "hejira"
        const actual = polybius(message)
        const expected = "325142422411"
        expect(actual).to.equal(expected)
    })
    it("should translate 42 to (i/j) when decoding", ()=>{
        const message = "42433342"
        const actual = polybius(message, false)
        const expected = "(i/j)on(i/j)"
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters",()=>{
        const message = "HeLLO"
        const actual = polybius(message)
        const expected = polybius("hello")
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces in the message before and after encoding",()=>{
        const message = "hello friend"
        const actual = polybius(message)
        const expected = "3251131343 122442513341"
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces in the message before and after decoding",()=>{
        const message = "3251131343 4432512451"
        const actual = polybius(message, false)
        const expected = "hello there"
        expect(actual).to.equal(expected)
    })
})