const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests written by Julian", ()=>{
    it("should return false if given alphabet isn't exactly 26 characters long",()=>{
        const input = "message"
        const alphabet = "abcdefghijklmnopqrstuvwxy"
        const actual = substitution(input, alphabet)
        expect(actual).to.be.false
    })
    it("should correctly translate given phrase, based on alphabet given to the function", ()=>{
        const input = "secretmessage"
        const alphabet = "1234567890asdfghjklpoiuytr"
        const actual = substitution(input, alphabet)
        const expected = "l53k5pd5ll175"
        expect(actual).to.equal(expected)
    })
    it("should return false if there are dupicate characters in given alphabet",()=>{
        const input = "message"
        const alphabet = "abcdefghiyklmnopqrstuvwxyz"
        const actual = substitution(input, alphabet)
        expect(actual).to.be.false
    })
    it("should maintain spaces in the message before and after encoding",()=>{
        const input = "a message with spaces"
        const alphabet = "qwertyuioplkjhgfdsaz%$@#*&"
        const actual = substitution(input, alphabet)
        const expected = "q jtaaqut @ozi afqeta"
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces in the message before and after decoding",()=>{
        const input = "q jtaaqut ygs rtegrohu"
        const alphabet = "qwertyuioplkjhgfdsaz%$@#*&"
        const actual = substitution(input, alphabet, false)
        const expected = "a message for decoding"
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters",()=>{
        const input = "HeLLO"
        const alphabet = "qwertyuioplkjhgfdsaz%$@#*&"
        const actual = substitution(input, alphabet)
        const expected = substitution("hello", alphabet)
        expect(actual).to.equal(expected)
    })
})