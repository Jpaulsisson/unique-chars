const aWord = 'letters';
const anotherWord = 'another';
const yetAnotherWord = 'returningfalse';
const lolItWasActuallyTwoWords = 'andthisoneisevenmore';
const butSeriously = 'logTrue';
const wordWithNumbers = 'I <3 my dog';
const testerString = 'I love to code!';
const az = 'a { ~ } z';

function uniqueCheck(string) {
  let unique = true;
  let characterCount = {};

  let stringArray = string.split('', string.length);
  stringArray.map((characterInString) => {
    characterCount[characterInString] = (characterCount[characterInString] || 0) + 1;
    // console.log(`characterInString or "key" / ${characterInString} // characterCount[characterInString] / "current value" -> ${characterCount[characterInString]}`) <------prints an easy to read console line as the function loops
    if (characterCount[characterInString] > 1) {
      unique = false;
    }
  });
  // console.log(characterCount); <-----prints the final totals for each letter
  return unique;
}

// console.log(uniqueCheck(aWord));
// console.log(uniqueCheck(anotherWord));
// console.log(uniqueCheck(yetAnotherWord));
// console.log(uniqueCheck(lolItWasActuallyTwoWords));
// console.log(uniqueCheck(butSeriously));

function encode(string, amount) {
  const uppercase = string.toUpperCase();
  let charCodeArray = [];
  for (let i = 0; i < uppercase.length; i++) {
    charCodeArray.push(uppercase.charCodeAt(i));
  }
  for (let i = 0; i < charCodeArray.length; i++) {
    let adjusted = charCodeArray[i] + amount;
    if (charCodeArray[i] < 65 || charCodeArray[i] > 90) {
      adjusted = charCodeArray[i]
    }
    if (adjusted > 90) {
      adjusted = ((adjusted - 90) + 64);
    }
    charCodeArray[i] > 90 || charCodeArray[i] < 65 ? charCodeArray[i] : charCodeArray[i] = adjusted
  }
  for (let i = 0; i < charCodeArray.length; i++) {
    charCodeArray[i] = String.fromCharCode(charCodeArray[i]);
  }
  const encodedString = charCodeArray.join('');
  return encodedString
}

// console.log(encode(wordWithNumbers, 5))
// console.log(encode(testerString, 10))
// console.log(encode(az, 1))

// const decrypt1 = 'N <3 RD ITL'
// const decrypt2 = 'S VYFO DY MYNO!'
// const decrypt3 = 'BA'

// //97 - 122

// function decode(string, amount) {
//   const lowercase = string.toLowerCase();
//   let charCodeArray = [];
//   for (let i = 0; i < lowercase.length; i++) {
//     charCodeArray.push(lowercase.charCodeAt(i));
//   }
//   for (let i = 0; i < charCodeArray.length; i++) {
//     let adjusted = charCodeArray[i] - amount;
//     if (charCodeArray[i] < 97 || charCodeArray[i] > 122) {
//       adjusted = charCodeArray[i]
//     }
//     if (adjusted < 97) 
//   }

//   console.log(charCodeArray)
// }
// console.log(decode(wordWithNumbers, 5))
// console.log(decode(testerString, 10))
// console.log(decode(az, 1))

function encodeAgain(string, amount) {
  //adjust to uppercase
  const uppercase = string.toUpperCase();

  //initialize empty array for char codes
  let charCodeArray = [];

  //- add "amount" to char codes in range
  //- cycle them to the beginning if "amount" causes them to go beyond 90
  //- push the adjusted char codes when needed
  //- or push the original char codes when out of range
  for (let i = 0; i < uppercase.length; i++) {
    const charCode = uppercase.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      const adjustedCode = charCode + amount > 90 ? (charCode + amount) - 26 : charCode + amount;
      charCodeArray.push(adjustedCode);
    } else {
      charCodeArray.push(charCode);
    }
  }

  // convert it back to a string
  for (let i = 0; i < charCodeArray.length; i++) {
    charCodeArray[i] = String.fromCharCode(charCodeArray[i]);
  }
  const encodedString = charCodeArray.join('');
  return encodedString
}

// console.log(encodeAgain(testerString, 2))
// console.log(encodeAgain(az, 1))

function decodeAgain(string, amount) {

  // convert to lowercase
  const lowercase = string.toLowerCase();

  // initialize empty array for char codes
  let charCodeArray = [];

  //- subtract "amount" from char codes in range
  //- cycle them to the end if "amount" causes them to go below 97
  //- push the adjusted char codes when needed
  //- or push the original char codes when out of range
  for (let i = 0; i < lowercase.length; i++) {
    const charCode = lowercase.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      const adjustedCode = charCode - amount < 97 ? (charCode - amount) + 26 : charCode - amount;
      charCodeArray.push(adjustedCode);
    } else {
      charCodeArray.push(charCode);
    }
  }

  //convert it back to a string
  for (let i = 0; i < charCodeArray.length; i++) {
    charCodeArray[i] = String.fromCharCode(charCodeArray[i]);
  }
  const encodedString = charCodeArray.join('');
  return encodedString
}

const decoderString = 'K NQXG VQ EQFG!'

// console.log(decodeAgain(decoderString, 2))


function longestSubstringNoRepeats(string) {
  let maxSub = 0
  for (let i = 0; i < string.length; i++) {
    let charCodes = []
    let j = i
    while (j < string.length) {
      let letterCode = string.charCodeAt(j)
      if (charCodes.includes(letterCode)) {
        j = string.length
      }
      else {
        charCodes.push(letterCode)
        j++
      }
      if (charCodes.length > maxSub) {
        maxSub = charCodes.length
      }
    }
  }
  return maxSub
}

const str1 = "abcabcbb"
const str2 = "aklsdfgjio"
const str3 = "iopauwetyi"
const str4 = "bbbbbb"

// console.log(longestSubstringNoRepeats(str1))
// console.log(longestSubstringNoRepeats(str2))
// console.log(longestSubstringNoRepeats(str3))
// console.log(longestSubstringNoRepeats(str4))

function longestSubstringNoRepeatsWithSet(string) {
  let maxSub = 0
  for (let i = 0; i < string.length; i++) {
    let charCodes = new Set()
    let j = i
    if (maxSub > (string.length - i)) return maxSub
    while (j < string.length) {
      let letterCode = string.charCodeAt(j)
      if (charCodes.has(letterCode)) {
        j = string.length
      }
      else {
        charCodes.add(letterCode)
        j++
      }
      if (charCodes.size > maxSub) {
        maxSub = charCodes.size
      }
    }
  }
  return maxSub
}

console.log(longestSubstringNoRepeatsWithSet(str1))
console.log(longestSubstringNoRepeatsWithSet(str2))
console.log(longestSubstringNoRepeatsWithSet(str3))
console.log(longestSubstringNoRepeatsWithSet(str4))
console.log('hi')