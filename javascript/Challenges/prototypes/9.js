function BankAccount(accountNumber, holderName, balance) {
  // Initialize accountNumber, holderName, and balance properties
  this.accountNumber = accountNumber;
  this.holderName = holderName;
  this.balance = balance;
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function (amount) {
  if (this.balance > amount) {
    this.balance -= amount;
  }
};

// Define transfer method on BankAccount's prototype
BankAccount.prototype.transfer = function (amount, targetAccount) {
  targetAccount.deposit(amount);
};