
class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
    //this.total = 0;
  }
  get balance() {
    let balance = 0;
    for (const transaction of this.transactions) {
      balance += transaction.value
    }
    //this.total = balance;
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    this.time = new Date();
    if (this.isAllowed()) {
      this.account.addTransaction(this);
    } else {
      return false;
      //this.account.addTransaction("Rejected transaction: insufficient funds")
    }
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
  isAllowed() {
    if (this.amount > this.account.balance) {
      return false
    } else {
      return true
    }
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
  isAllowed() {
    return true
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("Daniel James")

const t1 = new Deposit(100, myAccount)
t1.commit();

const t2 = new Deposit(100, myAccount)
t2.commit();

const t3 = new Withdrawal(300, myAccount);
t3.commit();

console.log(myAccount);


