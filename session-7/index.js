// ****************************************************TASK 1****************************************************

week_days = ["Mon", "Tue", "Wed", "Thur", "Fri"];

console.log(week_days[0]);
console.log(week_days.length);

for (let i=0; i<week_days.length; i+=1){
    console.log(week_days[i]);
}

console.log(week_days);

week_days.push("Sat");

console.log(week_days);

week_days.unshift("Sun");

console.log(week_days);

fruits = ["apple", "mango", "grapes", "orange", "banana"];

console.log(fruits);

console.log(fruits[2]);

console.log(fruits.pop());

console.log(fruits);

console.log(fruits.push("strawberries"));

console.log(fruits);

console.log(fruits.unshift("peaches"));

fruits.unshift("papaya");

console.log(fruits);

console.log(fruits[1]);

fruits.sort();

console.log(fruits);

fruits.sort().reverse();

console.log(fruits);

let animals = ["cow", "pig", "monkey", "duck", "bird", "horse", "tiger", "donkey", "dog", "lion"];
console.log(animals.length);
console.log(animals.sort());
console.log(animals.sort().reverse());











// ****************************************************TASK 2****************************************************
let friends = ["Abby", "Zoe", "Ronan", "Harry", "Davinder", "Hans", "Michelle", "Levi", "Ben", "Matt"];
console.log(friends.length);
console.log(friends.sort());
console.log(friends.sort().reverse());

let numbers = [1,2,5,9];
console.log(numbers.sort());










// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
/* const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
function compare(a, b) {
  
  return a.age - b.age;
}

function compare(age,theirName) {const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 }, */
/* ];
age.sort
  return (age)
  };

console.log(age);


const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

console.log(age); */



const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

function compare (a,b){
  return a.age - b.age;
}

for (let index = 0; index < people.length -1; index++){
  let person_A = people[index];
  let person_B = people[index+1];

  let difference = compare(person_A, person_B);

  if (difference > 0){
    people[index] = person_B;
    people[index+1] = person_A;
  };
};

const namesInAgeOrder = people.map((person) =>person.name);

console.log(namesInAgeOrder);
 

