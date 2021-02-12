//let balance = 500.00;
class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}


class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
}

class Withdrawal extends Transaction {
  commit() {
    this.account.balance -= this.amount;
  }
}

class Deposit extends Transaction {
  commit() {
    this.account.balance += this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("Daniel James")
console.log(myAccount);
const t1 = new Deposit(50, myAccount)
t1.commit()
console.log(myAccount);
const t2 = new Deposit(100, myAccount)
t2.commit();
console.log(myAccount);
const t3 = new Withdrawal(200, myAccount);
t3.commit();
console.log(myAccount);
