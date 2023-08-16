// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const lookup = "abcdefghijklmnopqrstuvwxyz"
  function substitution(input="", alphabet="", encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    // for loop to check for unique characters
    let alphabetLetters = []
    for (let i = 0; i < alphabet.length; i++){
      if (alphabetLetters.includes(alphabet[i])) {
        return false
      } else {
        alphabetLetters.push(alphabet[i])
      }
    }
  let result = ""
  inputString = input.toLowerCase()
  // loop to decode message
  if (encode === false) {
    for (let i = 0; i < inputString.length; i++) {
      const character = inputString[i]
      if (character === " ") {
        result += character;
      } else {
      const alphabetIndex = alphabet.indexOf(character)
      const letter = lookup[alphabetIndex]
      result += letter
      }
    }
  }
  else {
    // loop to encode message
     for (let i = 0; i < inputString.length; i++) {
    const character = inputString[i]
    if (character === " ") {
      result += character;
    } else {
    const lookupIndex = lookup.indexOf(character)
    const letter = alphabet[lookupIndex]
    result += letter
    }
  }
}
  return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
