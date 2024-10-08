const people = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

const sortedByAge = people.sort((a, b) => Number(a.age) - Number(b.age));
console.log("Sorted by Age:", sortedByAge);

const filteredByAge = people.filter(person => Number(person.age) <= 50);
console.log("Filtered by Age (<= 50):", filteredByAge);

const mappedData = people.map(person => ({
  id: person.id,
  name: person.name,
  job: person.occupation,
  age: Number(person.age) + 1
}));
console.log("Mapped Data:", mappedData);

const totalAge = people.reduce((accumulator, person) => accumulator + Number(person.age), 0);
console.log("Total Age:", totalAge);

const averageAge = totalAge / people.length;
console.log("Average Age:", averageAge);