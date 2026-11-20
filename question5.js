// FRÅGA 5 – DOM: rendera produkter (4p)
//
// I index.html finns en container med id="products".
// 1. Skapa en array med minst tre produktobjekt (name och price).
// 2. Använd map() för att skapa ett <li> för varje produkt.
// 3. Varje <li> ska innehålla produktens namn och pris samt en knapp.
// 4. När man klickar på en produkts knapp ska just det <li>-elementets
//    bakgrundsfärg ändras till grön.
//
// Tips: använd document.createElement(), addEventListener()
// och element.style.backgroundColor.

const products = [
  // Lägg till minst tre produkter här
  {
    name: "Red Bull Pistachio",
    price: 20,
  },
  {
    name: "Celsius Prime",
    price: 29,
  },
  {
    name: "Nocco Magnificent",
    price: 33,
  },
];

const container = document.querySelector("#products");

// Skriv din kod här
products.forEach((product) => {
  const li = document.createElement("li");
  const button = document.createElement("button");

  li.textContent = `${product.name} (${product.price} kr)`;
  button.textContent = "Change Color";

  button.addEventListener("click", () => {
    li.style.backgroundColor = "green";
    li.style.borderRadius = "10px";
  });

  container.appendChild(li);
  li.appendChild(button);
});
