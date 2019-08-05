# Inheritance

User
  -properties
    -name
    -score
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1

PaidUser
  -properties
    -name
    -score
    -balance
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1
    -increaseBalance: returna balance decreased by 1

Using Inheritance convert the above into following patterns.

1. Prototypal Pattern
2. Pseudoclassical Pattern
3. Classes

// classes inheritance 
class User { 
  constructor(name,score) {
    this.name = name;
    this.score = score;
  }
  increaseScore(score) { 
    return this.score++;
  }
  decreaseScore(score) {
    return this.score--;
  }
}
class PaidUser extends User {
  constructor(name,score,balance) {
    super(name,score) 
      this.balance = balance;
  }
  increaseBalance(balnce) {
    return this.balance++
  }
}