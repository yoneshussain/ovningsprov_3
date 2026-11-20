// FRÅGA 4 – Arrow functions och callbacks (3p)
//
// 1. createDiscount(price, discount): returnera priset efter rabatt.
//    discount anges i procent, exempelvis 20 för 20 %.
// 2. isAdult(age): returnera true om åldern är 18 eller högre.
// 3. Använd filter() för att få fram namn som har minst 5 tecken.

const createDiscount = (price, discount) => {
  // Skriv din kod här
  const percentage = `0.${discount}`;
  const discounted = price * percentage;
  return discounted;
};

const isAdult = (age) => {
  // Skriv din kod här
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

const names = ["Ali", "Sandra", "Jonathan", "Mia", "Daniel"];

// Skapa en ny array med namn som har minst 5 tecken.

const filteredNames = [];

names.forEach((name) => {
  if (name.length > 5) {
    filteredNames.push(name);
  }
});

console.log("Fråga 4 – rabatt:", createDiscount(500, 20));
console.log("Fråga 4 – myndig:", isAdult(18));
console.log("Fråga 4 – filtrerade namn:", filteredNames);
