// FRÅGA 3 – Spread och destructuring (3p)
//
// 1. Skapa en kopia av objektet person och ändra city till "Uppsala".
//    Ändra inte originalobjektet.
// 2. Plocka ut name och age med object destructuring.
// 3. Skriv getProperty(object, property) som returnerar värdet
//    för den egenskap som anges i property.

const person = {
  name: "Alex",
  age: 22,
  city: "Stockholm",
};

// Skriv din kod här
const person2 = { ...person, city: "Uppsala" };

const { name, age } = person;

function getProperty(object, property) {
  return object[property];
}

console.log("Fråga 3 – original:", person);
console.log("Fråga 3 – spread:", person2);
console.log(name, age);
console.log(getProperty(person, "city"));
// Skriv ut din kopia, de destructurerade värdena och ett test av getProperty().
