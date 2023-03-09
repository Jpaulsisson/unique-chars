const aWord = 'letters';
const anotherWord = 'another';
const yetAnotherWord = 'returningfalse';
const lolItWasActuallyTwoWords = 'andthisoneisevenmore';
const butSeriously = 'logTrue';

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

console.log(uniqueCheck(aWord));
console.log(uniqueCheck(anotherWord));
console.log(uniqueCheck(yetAnotherWord));
console.log(uniqueCheck(lolItWasActuallyTwoWords));
console.log(uniqueCheck(butSeriously));

