let diceNumber: number = 1;

const rollDice = (): number => {
  const result = Math.floor(Math.random() * 6 + 1);
  return result;
}

const onClickButton = (): void => {
  diceNumber = rollDice();

  const element = document.getElementById("dice-number");
  if (element) {
    element.innerText = diceNumber.toString();
  }
}

const rollButton = document.getElementById("roll-button");
rollButton?.addEventListener("click", onClickButton);
