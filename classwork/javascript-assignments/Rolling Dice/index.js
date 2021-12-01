let numSides = prompt("How many sides does the die have?");

const rollMe = (sides) => {
  return Math.floor(Math.random() * sides + 1);
};

for (let i = 0; i < 100; i++) {
  console.log(rollMe(numSides));
}
