function createAccount(pin, amount = 0) {
  return {
    checkBalance(yourPin) {
      if (yourPin !== pin) {
        return "Invalid PIN.";
      }
      return `$${amount}`;
    },
    deposit(yourPin, depositAmount) {
      if (yourPin !== pin) {
        return "Invalid PIN.";
      }
      amount += depositAmount;
      return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`;
    },
    withdraw(yourPin, withdrawAmount) {
      if (yourPin !== pin) {
        return "Invalid PIN.";
      }
      amount -= withdrawAmount;
      if (amount < 0) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
      return `Succesfully withdrew $${withdrawAmount}. Current balance: $${amount}.`;
    },
    changePin(oldPin, newPin) {
      if (oldPin !== pin) {
        return "Invalid PIN.";
      }
      pin = newPin;
      return "PIN successfully changed!";
    },
  };
}

module.exports = { createAccount };
