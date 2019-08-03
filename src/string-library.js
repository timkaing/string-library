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

// allCaps() - makes all characters uppercase
const allCaps = (text) => {
  let capitalized = '';
  for (let i = 0; i < text.length; i += 1) {
    // var code = str.charCodeAt(i)
    if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
      // falls back 32 characters, thus providing the uppercase value
      capitalized += String.fromCharCode(text.charCodeAt(i) - 32);
    } else {
      capitalized += String.fromCharCode(text.charCodeAt(i));
    }
  }
  return capitalized;
};

// allLower() - makes all characters lowercase
const allLower = (text) => {
  let lowercase = ''
  for (let i = 0; i < text.length; i += 1) {
    // var code = str.charCodeAt(i)
    if (text.charCodeAt(i) >= 64 && text.charCodeAt(i) <= 91) {
      // falls back 32 characters, thus providing the uppercase value
      lowercase += String.fromCharCode(text.charCodeAt(i) + 32);
    } else {
      lowercase += String.fromCharCode(text.charCodeAt(i));
    }
  }
  return lowercase;
};

// capitalizeWords() - makes the first character of each word uppercase
// excludes "in", "a", "an", "and", "but", "for", "at", "by", "from"
const capitalizeWords = (text) => {
  // generates a list of words split by spaces
  let wordList = text.split(' ');
  let newList = [];
  const specialWords = ['in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from'];
  wordList.forEach(function (item) {
    if (!specialWords.includes(item)) {
      newList.push(capitalize(item))
    } else {
      newList.push(item)
    }
  });
  return newList.join(' ');
};

// oddCaps() - Makes all odd characters uppercase
const oddCaps = (text) => {
  let wordList = text.split(' ');
  let newList = [];
  let counter = 0;
  wordList.forEach(function (item) {
    newList.push([]);
    for (let i = 0; i < item.length; i += 1) {
      let curr_char = item[i];
      if (i % 2 != 0) {
        curr_char = toUpper(item[i]);
      } else {
        curr_char = toLower(item[i]);
      }
      newList[counter].push(curr_char);
    }
    counter += 1;
  });
  return newList.map(letters => letters.join('')).join(' ');
};

// evenCaps() - Makes all even characters uppercase
const evenCaps = (text) => {
  let wordList = text.split(' ');
  let newList = [];
  let counter = 0;
  wordList.forEach(function (item) {
    newList.push([]);
    for (let i = 0; i < item.length; i += 1) {
      let curr_char = item[i];
      if (i % 2 != 0) {
        curr_char = toLower(item[i]);
      } else {
        curr_char = toUpper(item[i]);
      }
      newList[counter].push(curr_char);
    }
    counter += 1;
  });
  return newList.map(letters => letters.join('')).join(' ');
};

// removeExtraSpace()
// Removes all spaces from the beginning and end of a String along with any extra spaces in the middle.
// If more than one space appears in the middle of a string it is replaced by a single space.
const removeExtraSpace = (text) => {
  const pattern = /[\s]{2,}/g
  const cleanedText = text.replace(pattern, ' ');
  return cleanedText.trim();
};

// kabobCase()
// Removes extra spaces and repƒlaces spaces with the hyphen "-", and makes all characters lowercase
const kabobCase = (text) => {
  return removeExtraSpace(allLower(text)).replace(/\s+/g, '-');
};


// snakeCase() - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase
const snakeCase = (text) => {
  return removeExtraSpace(allLower(text)).replace(/\s+/g, '_');
};

// camelCase() - Lowercases the first character of the first word.
// Then uppercases the first character of all other words, and removes all spaces.
const camelCase = (text) => {
  let wordList = removeExtraSpace(allLower(text)).split(' ');
  let newList = [];
  newList.push(wordList[0]);
  for (let i = 1; i < wordList.length; i += 1) {
    newList.push(capitalize(wordList[i]));
  }
  return newList.join('');
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

module.exports.test = test;
module.exports.capitalize = capitalize;
module.exports.allCaps = allCaps;
module.exports.allLower = allLower;
module.exports.capitalizeWords = capitalizeWords;
module.exports.oddCaps = oddCaps;
module.exports.evenCaps = evenCaps;
module.exports.removeExtraSpace = removeExtraSpace;
module.exports.kabobCase = kabobCase;
module.exports.snakeCase = snakeCase;
module.exports.camelCase = camelCase;
module.exports.toLower = toLower;
module.exports.toUpper = toUpper;
