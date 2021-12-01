function countingCharacters(stringToCount, letter) {
  let str = stringToCount.split("");
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  console.log(
    stringToCount + " has " + letter + " " + count + " number of times"
  );
}

countingCharacters("Jon B Robeson", "o");
