// FRÅGA 1 – Array methods (4p)
// Skapa funktionerna nedan.
//
// 1. getNumbersAbove30(numbers)
//    Returnera endast talen som är större än eller lika med 30.
//
// 2. doubleNumbers(numbers)
//    Returnera en ny array där varje tal har dubblerats.
//
// 3. removeDuplicates(values)
//    Returnera en ny array utan dubbletter.
//    Lös uppgiften med filter() och indexOf() eller includes().

const getNumbersAbove30 = (numbers) => {
  // Skriv din kod här
  const filtered = numbers.filter((number) => number >= 30);
  return filtered;
};

const doubleNumbers = (numbers) => {
  // Skriv din kod här
  const mapped = numbers.map((number) => number * 2);
  return mapped;
};

const removeDuplicates = (values) => {
  // Skriv din kod här
  const filtered = values.filter(
    (value, index) => values.indexOf(value) === index,
  );
  return filtered;
};

// Testa dina funktioner här:
console.log(
  "Fråga 1 – getNumbersAbove30:",
  getNumbersAbove30([10, 30, 45, 22, 60]),
);
console.log("Fråga 1 – doubleNumbers:", doubleNumbers([1, 2, 3, 4]));
console.log(
  "Fråga 1 – removeDuplicates:",
  removeDuplicates([1, 2, 2, 3, 1, 4]),
);
