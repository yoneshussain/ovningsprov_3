// FRÅGA 2 – Reduce och objekt (4p)
// En varukorg består av objekt med name, price och quantity.
//
// 1. calculateTotal(cart): räkna ut totalsumman med reduce().
// 2. Funktionen ska returnera 0 om varukorgen är tom.
// 3. getExpensiveItems(cart): returnera rader där price är högre än 100.

const cart = [
  { name: "T-shirt", price: 150, quantity: 2 },
  { name: "Mössa", price: 80, quantity: 1 },
  { name: "Jacka", price: 900, quantity: 1 },
];

const calculateTotal = (cart) => {
  // Skriv din kod här
  if (cart.length !== 0) {
    const prices = [];
    cart.forEach((product) => {
      prices.push(product.price);
    });
    const total = prices.reduce((sum, price) => sum + price, 0);
    return total;
  } else {
    return 0;
  }
};

const getExpensiveItems = (cart) => {
  // Skriv din kod här
  const expensive = [];
  cart.forEach((product) => {
    if (product.price >= 100) {
      expensive.push(product);
    }
  });
  return expensive;
};

console.log("Fråga 2 – total:", calculateTotal(cart));
console.log("Fråga 2 – dyra varor:", getExpensiveItems(cart));
console.log("Fråga 2 – tom varukorg:", calculateTotal([]));
