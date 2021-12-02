const startingBet = document.getElementById("bet");
const table = document.getElementById("table");
const betCell = document.getElementById("start");
const rolls = document.getElementById("total-rolls");
const highestAmount = document.getElementById("highest-amount");
const highestRoll = document.getElementById("roll-at-highest");
const button = document.getElementById("play");
const playAgain = document.getElementById("play-again");
const rows = document.querySelectorAll("tr");
const data = document.querySelectorAll("td");

const luckySevens = async (e) => {
  e.preventDefault();
  let betCollector = [];
  let initialSum = startingBet.value;
  let money = initialSum;
  let rollCount = 0;
  let highestIndex = null;
  let highestReward = null;

  for (let i = 0; money !== 0; i++) {
    let result = await diceRoll();

    if (money <= 0) {
      return;
    } else if (result === 7) {
      money += 4;
      betCollector.push(money);
    } else {
      money -= 1;
      betCollector.push(money);
    }
    rollCount++;
  }

  highestReward = Math.max(...betCollector);

  if (initialSum > highestReward) {
    highestIndex = 0;
    highestReward = 0;
  } else {
    highestIndex = betCollector.indexOf(Math.max(...betCollector)) + 1;
  }

  betCell.innerText = `$${initialSum}.00`;
  rolls.innerText = rollCount;
  highestAmount.innerText =
    highestReward === 0 ? "You never won" : `$${highestReward}.00`;
  highestRoll.innerText =
    highestIndex === 0 ? "You never had a winning roll" : highestIndex;

  table.setAttribute("style", "margin: 0 auto; border: 1px solid black");
  rows.forEach((row) =>
    row.setAttribute("style", "margin: 0 auto; border: 1px solid black")
  );
  data.forEach((dataset) =>
    dataset.setAttribute("style", "margin: 0 auto; border: 1px solid black")
  );
  playAgain.setAttribute("style", "");
  startingBet.value = "";
};

const diceRoll = () => {
  let result = 0;
  for (let i = 0; i < 2; i++) {
    result += Math.floor(Math.random() * 6 + 1);
  }
  return result;
};

button.addEventListener("click", luckySevens);
