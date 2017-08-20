/*
You will create 2 classes: a Bank class and an Account class.  
A Bank contains many Accounts.  A Bank should have the following functionality:

Bank

.createAccount( // takes a name, a secret and
                // optionally an initial deposit
                // returns an instance of an account)

.lookupAccount( // takes an account id )

.deposit( // takes account id and amount,
          // returns the new balance)

.withdraw( // take account id, a secret and amount 
           // but does not allow over drafting.
           // In the case of an overdraw, null should be returned,
           // otherwise return the amount withdrawn)

Account

An account is created with a name, an account id (can be a large random number 
but should not be created by the caller), a secret and optionally an initial deposit.  
If no initial deposit is given, the account starts at 0.

.deposit( // takes a dollar amount and returns a new balance)

.accountId() // returns the accountId

.withdraw( // takes a secret and an amount,
                  // only withdraws money if the secret is correct and
                  // the amount is less than or equal to the balance.
                  // if the withdraw is allowed, the amount withdrawn is returned
                 // otherwise null is returned)
*/

// constructor functions

function Bank() {
  // placeholder for accountIds: account instances
  this.accounts = {}; 
}

function Account(name, secret, balance=0) {
  this.name = name;
  this.accId = Math.floor(Math.random()*1000);
  this.secret = secret;
  this.balance = balance;
}


// bank prototype functions:


Bank.prototype.createAccount = function(name, secret, deposit=0) {
  // create an account and push it to the bank
  var account = new Account(name, secret, deposit);
  // add new account instance to the bank class's account object
  this.accounts[account.accountId()] = account;
  // return new account instance
  return account.accountId();
}

Bank.prototype.lookupAccount = function(accountId) {
  // look this up from the accounts object in the bank class
  return this.accounts[accountId];
}

Bank.prototype.deposit = function(accountId, deposit) {
  // if this account is in the accounts object in the bank class
  if (this.accounts[accountId]) {
    // use the account class's deposit function
    return this.accounts[accountId].deposit(deposit);
  }
  // else return null;
  return null;
}

Bank.prototype.withdraw = function(accountId,secret,withdraw) {
  // if this account is in the accounts object in the bank class
  // and secret is the account secret (checked by the account's
  // withdraw function itself)
  if (this.accounts[accountId]) {
    // use the account class's withdraw function
    return this.accounts[accountId].withdraw(secret,withdraw);
  }
  // else return null;
  return null;
}

// account prototype functions:

Account.prototype.deposit = function(deposit) {
  // increment the account's balance
  this.balance += deposit;
  return this.balance;
}

Account.prototype.withdraw = function(secret, withdraw) {
  // confirm that the secret matches and account not overdrawn
  if(secret === this.secret) {
    if(withdraw <= this.balance) {
      this.balance -= withdraw;
      return this.balance;
    }
  }
  // else return null
  return null;
}

Account.prototype.accountId = function() {
  // pull from account class
  return this.accId;
}

/* TESTING:

// create a bank

var bank = new Bank();

// create an account

var katieAccountId = bank.createAccount("Katie", "is from Texas", 50000);
bank.lookupAccount(katieAccountId);
bank.deposit(katieAccountId, 35);
bank.withdraw(katieAccountId, "is from Texas", 900); 

*/
