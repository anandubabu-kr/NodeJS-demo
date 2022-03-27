class BankACC {
  constructor() {
    this.balence = 0;
    console.log('acc created : ', this.balence);
    this.credit();
    this.debit();
  }
  credit() {
    this.balence += 100;
    console.log('acc credited : ', this.balence);
  }
  debit() {
    this.balence -= 50;
    console.log('bal debited : ', this.balence);
  }
}

let acc = new BankACC();

acc.credit();

const show = () => {
  console.log('This is this :', this);
};

// show();

/**
 * function cunstructores and scope
 * - freenome
 */

function constr(name) {
  var person = {};
  person.name = name;
  return person;
}

let name = 's';

console.log(constr('Mary'));

function Person(name) {
  this.name = name;
}

var person = Person('Baabu');

console.log(person);

/**
 * Binding and this keyword
 * - This keyword basically refres to the scope/execution contecx of the current function.
 * - The variables/functions defined within a context(function/class) should be invoked with its context reference ie this
 */

var binder = 'Global ';

function biderFun() {
  console.log('Global fun');
}

class Binder {
  constructor(val) {
    this.binder = 'Binder ';
    this.val = val;
  }
  biderFun() {
    console.log('Binder fun');
  }
}

console.log('binder : ', binder);
let tester = new Binder('pakkru');
console.log(tester.val);

/**
 * console.log('class bider : ', tester.binder);
 * console.log('G binder fun : ', biderFun());
 * console.log('C binder fun : ', tester.biderFun());
 *
 */

class TwoPoints {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  distance(x, y) {
    let dist = sqrt(this.x - x);
    return dist;
  }
}

console.log(Math.sqrt(4));
