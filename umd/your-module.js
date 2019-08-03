(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.yourModule = {}));
}(this, function (exports) { 'use strict';

  // capitalize() - makes the first character of a given string uppercase

  const capitalize = (text) => {
    const firstChar = text.charCodeAt(0);
    // checks if first character is lowercase
    if (firstChar >= 97 && firstChar <= 122) {
      // falls back 32 characters, thus providing the uppercase value
      const firstCapped = String.fromCharCode(firstChar - 32);
      return firstCapped + text.substr(1);
    }
    return text;
  };

  // Helper Functions
  const toLower = (letter) => {
    let lowercase = letter;
    if (letter.charCodeAt(0) >= 64 && letter.charCodeAt(0) <= 91) {
      // falls back 32 characters, thus providing the uppercase value
      lowercase = String.fromCharCode(letter.charCodeAt(0) + 32);
    } else {
      lowercase = String.fromCharCode(letter.charCodeAt(0));
    }
    return lowercase;
  };

  const toUpper = (letter) => {
    let uppercase = letter;
    if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
      // falls back 32 characters, thus providing the uppercase value
      uppercase = String.fromCharCode(letter.charCodeAt(0) - 32);
    } else {
      uppercase = String.fromCharCode(letter.charCodeAt(0));
    }
    return uppercase;
  };

  exports.capitalize = capitalize;
  exports.toLower = toLower;
  exports.toUpper = toUpper;

}));
