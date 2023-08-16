// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // lookup object for referencing position of characters
  const lookup = "abcdefghijklmnopqrstuvwxyz";
  function caesar(input = "", shift = 0, encode = true) {
    let result = "";
    const inputString = input.toLowerCase();
    if (shift === 0 || shift > 25 || shift < -25) return false;
    let shiftAmt = shift;
    // if encode is false, shift value reversed
    if (encode === false) shiftAmt *= -1;
    // look at each character in the input
    for (let i = 0; i < inputString.length; i++) {
      // find the index of the current character in the lookup
      const character = inputString[i];
      // if it is not in the lookup, add character to result
      if (!lookup.includes(character)) {
        result += character;
      } else {
        const currentIndex = lookup.indexOf(character);
        // add shift amount to index of character in lookup
        let newIndex = (currentIndex + shiftAmt) % 26; // wraps around
        if (newIndex < 0) {
          newIndex += 26; // Handle negative indices
        }
        // find new character at the shifted index and add it to result
        const newLetter = lookup[newIndex];
        result += newLetter;
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
