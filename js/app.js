function getInputValue(inputId) {
  const inputField = document.getElementById(inputId + "-input");
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  return amountValue;
}
function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  totalElement.innerText = amount;
}
function savings(amount, rate) {
  return (savingsAmount = amount * (rate / 100));
}
document.getElementById("calculate").addEventListener("click", function () {
  const incomeAmount = getInputValue("income");
  const foodAmount = getInputValue("food");
  const rentAmount = getInputValue("rent");
  const otherAmount = getInputValue("others");

  const totalExpenses = rentAmount + foodAmount + otherAmount;
  updateTotalField("expenses-amount", totalExpenses);

  const balanceAmount = incomeAmount - totalExpenses;
  updateTotalField("balance-amount", balanceAmount);
  if (incomeAmount < 0 || foodAmount < 0 || rentAmount < 0 || otherAmount < 0) {
    updateTotalField("balance-amount", "Negative amount");
    updateTotalField("expenses-amount", "Negative amount");
  }
});

document.getElementById("save").addEventListener("click", function () {
  const incomeAmount = getInputValue("income");
  const savingsRateText = getInputValue("percent");
  const savingsRate = parseFloat(savingsRateText);
  savings(incomeAmount, savingsRate);
  updateTotalField("savings-amount", savingsAmount);
  const balanceAmountText = document.getElementById("balance-amount").innerText;
  const balanceAmount = parseFloat(balanceAmountText);

  const remainingAmount = balanceAmount - savingsAmount;

  if (
    savingsAmount > balanceAmount ||
    savingsAmount - balanceAmount == 0 ||
    isNaN(remainingAmount)
  ) {
    updateTotalField("remaining-balance", "Not enough for Savings");
  } else {
    updateTotalField("remaining-balance", remainingAmount);
  }
});
