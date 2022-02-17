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
  //   console.log(incomeTotal);
  const rentAmount = getInputValue("rent");
  //   console.log(rentTotal);
  const foodAmount = getInputValue("food");
  //   console.log(foodTotal);
  const otherAmount = getInputValue("others");
  //   console.log(otherTotal);
  const totalExpenses = rentAmount + foodAmount + otherAmount;
  //   console.log(totalExpenses);

  updateTotalField("expenses-amount", totalExpenses);

  //   //   getting and updating total expenses
  //   const totalExpensesText = document.getElementById("expenses-amount");
  //   totalExpensesText.innerText = totalExpenses;

  // getting and updating Balance amount
  const balanceAmount = incomeAmount - totalExpenses;
  //   const balanceAmountText = document.getElementById("balance-amount");
  //   balanceAmountText.innerText = balanceAmount;
  updateTotalField("balance-amount", balanceAmount);
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

  if (savingsAmount > balanceAmount) {
    updateTotalField("remaining-balance", "Not enough for Savings");
  } else {
    updateTotalField("remaining-balance", remainingAmount);
  }
});

/* document.getElementById("calculate").addEventListener("click", function () {
  const totalExpensesText = document.getElementById("expenses-amount");
  const incomeInput = document.getElementById("income-input").value;
  const incomeAmount = parseFloat(incomeInput);
  const foodInput = document.getElementById("food-input").value;
  const foodAmount = parseFloat(foodInput);
  const rentInput = document.getElementById("rent-input").value;
  const rentAmount = parseFloat(rentInput);
  const otherInput = document.getElementById("others-input").value;
  const otherAmount = parseFloat(otherInput);
  const totalExpenses = foodAmount + rentAmount + otherAmount;
  totalExpensesText.innerText = totalExpenses;
  const balanceAmount = incomeAmount - totalExpenses;
  const balanceAmountText = document.getElementById("balance-amount");
  balanceAmountText.innerText = balanceAmount;
});
document.getElementById("save").addEventListener("click", function () {
  const incomeInput = document.getElementById("income-input").value;
  const incomeAmount = parseFloat(incomeInput);
  const savingsRateText = document.getElementById("savings-percent").value;
  const savingsRate = parseFloat(savingsRateText);
  const savingsAmount = incomeAmount * (savingsRate / 100);
  const savingsText = document.getElementById("savings");
  savingsText.innerText = savingsAmount;
  const balanceAmountText = document.getElementById("balance-amount").innerText;
  console.log(balanceAmountText);
  const balanceAmount = parseFloat(balanceAmountText);
  console.log(balanceAmount);
  const remainingAmount = balanceAmount - savingsAmount;
  const remainingBalanceText = document.getElementById("remaining-balance");
  remainingBalanceText.innerText = remainingAmount;
}); */
