/* 
REST parameter
Takes all the information and makes it an Array
*/

const double = (...nums) => {
  return nums.map((num) => num * 2);
};

const result = double(1, 3, 5, 7, 2, 4, 6, 8);

console.log(result);
//  [2, 6, 10, 14, 4, 8, 12, 16]

/*
Spread Syntax
Spreads information from the Array into separate objects
*/
const fruits1 = ["Peaches", "Apples", "Grapes"];
const fruits2 = ["Pear", "Orange", "Bananas", ...fruits1];

console.log(...fruits2);
// Pear Orange Bananas Peaches Apples Grapes

const person = {
  name: "Dmitriy Malayev",
  age: 38,
  profession: "Software Engineer",
};
const personClone = { ...person, location: "Queens, NY" }; //full copy of the object, not a pointer
console.log(personClone);
// {name: 'Dmitriy Malayev', age: 38, profession: 'Software Engineer', location: 'Queens, NY'}

/*
Sets (new DataStructure in the Object Category. ReferenceType. )
Sets don't allow duplicates values.
Sets return on Object even if we pass an Array. Unless we combine it with Spread syntax.
*/
const namesArray = ["Dmitriy", "Dmitriy", "Dima", "David"];
const namesSet = new Set(namesArray);
console.log(namesSet);
//  {"Dmitriy", "Dima", "David"}

// ALTERNATIVE
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);
// ['Dmitriy', 'Dima', 'David']

// Sets and Methods have two different set of methods.
// It will not accept a value that is already in the set.
const ages = new Set();
ages.add(20);
ages.add(30);
ages.add(30);

console.log(ages, ages.size);
// {20, 30} 2
console.log(ages.has(20));
// true

ages.clear();
// clears all the values in the set

// Sets are Iterable.

const people = new Set([
  { name: "Dmitriy", age: 38 },
  { name: "Raymond", age: 50 },
  { name: "Emilya", age: 51 },
]);

people.forEach((person) => console.log(person.name));

/* 
Symbols (completely unique)
It's a primitive type and doesn't require a "new" keyword.
They can be used as keys or property names in objects.
*/
const symbolOne = Symbol();
const symbolTwo = Symbol();

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo); //false

const moreSymbols = {};
moreSymbols[symbolOne] = "A";
moreSymbols[symbolTwo] = "B";
console.log(moreSymbols);
// {Symbol(): 'A', Symbol(): 'B'}
