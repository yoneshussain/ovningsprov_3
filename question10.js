// FRÅGA 10 – Closures och moduler (4p)
//
// Dela upp lösningen i tre filer:
//
// receipt.js
// - Exportera funktionen subTotal(lines, products).
// - Använd reduce() för att räkna ut summan av price * quantity.
// - Hämta priset från produkten som matchar line.productId.
//
// cart.js
// - Importera subTotal från receipt.js.
// - Exportera funktionen createCart(products).
// - Skapa en privat array lines inuti createCart.
// - Returnera ett objekt med metoderna:
//   add(productId, quantity = 1), lines() och total().
// - add() ska kontrollera att produkten finns. Om inte, kasta:
//   new Error(`Okänd produkt: ${productId}`)
// - Om produkten redan finns i varukorgen ska quantity uppdateras.
// - lines() ska returnera en kopia av lines, inte den privata arrayen.
// - total() ska returnera resultatet från subTotal(lines, products).
//
// main.js
// - Importera createCart och testa varukorgen.
//
// Den här frågan har separata filer: se receipt.js, cart.js och main.js.
