// Given an array of objects, return the names of all animals that are older than 5 using the "filter" array method

const animals = [
  { name: "Natasha", age: 10 },
  { name: "Raina", age: 1 },
  { name: "Rocky", age: 13 },
  { name: "Bullwinkle", age: 13 },
  { name: "Mya", age: 4 },
  { name: "Celeste", age: 1 }
];

const animalsOlderThanFive = collection => { 
  if (collection.age > 5) {
    return collection.name;
  }
};
// const filtered = animals.filter(animalsOlderThanFive);
// console.log(filtered)



