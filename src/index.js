let diceNumber = 1;

const rollDice = () => {
  const result = Math.floor(Math.random() * 6 + 1);
  return result;
}

const onClickButton = () => {
  diceNumber = rollDice();

  const element = document.getElementById("dice-number");
  element.innerText = diceNumber;
}

const rollButton = document.getElementById("roll-button");
rollButton.addEventListener("click", onClickButton);
