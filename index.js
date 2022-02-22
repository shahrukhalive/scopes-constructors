// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function Student(name,age,mark){
  this.name = name;
  this.age = age;
  this.mark = mark;
}

const studentOne = new Student('elon' , 50,100)
const studentTwo = new Student('mark' , 50,100)

console.log(studentOne)

const user = {
  name : 'Elon',
  age : 50,
  isActive : true,
};

console.log(user.name + " " + user.age + " " + user.isActive);

const stringOne = 'I am from the global scope';

function one() {
  const stringTwo = 'I am from the outer scope';

  function two() {
    const stringThree = 'workattech';
    console.log(stringThree);    // outputs workattech
    console.log(stringTwo);    // outputs I am from the outer scope
    console.log(stringOne);    // outputs I am from the global scope
    // console.log(stringZero);    // throws reference error as stringZero is not present in any of the scope
  }    

  two();
}

one();






