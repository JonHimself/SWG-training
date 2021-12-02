const startingBet = document.getElementById("bet");
const table = document.getElementById("table");
const betCell = document.getElementById("start");
const rolls = document.getElementById("total-rolls");
const highestAmount = document.getElementById("highest-amount");
const highestRoll = document.getElementById("roll-at-highest");
const button = document.getElementById("play");

const luckySevens = async (e) => {
  e.preventDefault();
  let betCollector = [];
  let initialSum = startingBet.value;
  let money = initialSum;
  let rollCount = 0;
  let highestIndex = null;
  let highestReward = null;

  for (let i = 0; money !== 0; i++) {
    console.log(initialSum);
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

  betCell.innerText = initialSum;
  rolls.innerText = rollCount;
  highestAmount.innerText = highestReward;
  highestRoll.innerText = highestIndex;

  table.setAttribute("style", "");
};

const diceRoll = () => {
  let result = 0;
  for (let i = 0; i < 2; i++) {
    result += Math.floor(Math.random() * 6 + 1);
  }
  return result;
};

button.addEventListener("click", luckySevens);
