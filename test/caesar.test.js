const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests written by Julian", ()=>{
    it("should return false if the shift value is 0",()=>{
        const actual = caesar("message", 0)
        expect(actual).to.be.false;
    })
    it("should return false if the shift value is less than -25",()=>{
        const actual = caesar("message", -26)
        expect(actual).to.be.false;
    })
    it("should return false if the shift value over 25",()=>{
        const actual = caesar("message", 30)
        expect(actual).to.be.false;
    })
    it("should ignore capital letters",()=>{
        const message = "HElLo"
        const actual = caesar(message, 1)
        const expected = "ifmmp"
        expect(actual).to.equal(expected)
    })
    it("should handle shifts that go past the end of the alphabet",()=>{
        const message = "xyz"
        const actual = caesar(message, 3)
        const expected = "abc"
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces and non-alphabetic characters, before and after encoding",()=>{
        const message = "hello. $ # @ *"
        const actual = caesar(message, 3)
        const expected = "khoor. $ # @ *"
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces and non-alphabetic characters, before and after decoding",()=>{
        const message = "khoor!!! :)"
        const actual = caesar(message, 3, false)
        const expected = "hello!!! :)"
        expect(actual).to.equal(expected)
    })
})