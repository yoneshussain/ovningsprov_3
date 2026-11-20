// FRÅGA 9 – Objektorienterad programmering (5p)
//
// Skapa två klasser: Product och Store.
//
// Product ska:
// - ta emot name och price i konstruktorn
// - spara värdena som egenskaper
// - ha en metod som returnerar en beskrivning av produkten
//
// Store ska:
// - ha en array products
// - ha metoden addProduct(product)
// - ha metoden listProducts() som visar/beskriver alla produkter
// - ha metoden getTotalValue() som returnerar summan av alla produkters pris
//
// Testa klasserna genom att skapa en butik och lägga till minst tre produkter.

// Skriv din kod här

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    console.log(`${this.name} costs ${this.price}!`);
  }
}

class Store {
  constructor() {
    this.products = [];
  }

  addProduct(name, price) {
    this.products.push(new Product(name, price));
    console.log("New product added:", this.products);
  }

  listProducts() {
    if (this.products.length > 0) {
      console.log(this.products);
    } else {
      console.log("There are no products to show!");
    }
  }

  getTotalValue() {
    if (this.products.length > 0) {
      const total = this.products.reduce((sum, product) => {
        return sum + product.price;
      }, 0);
      console.log("The total value is:", total);
    } else {
      console.log("There are no products to calculate!");
    }
  }
}

const ica = new Store();

ica.addProduct("Mjölk", 19);
ica.addProduct("Juice", 23);
ica.addProduct("Glass", 21);
ica.addProduct("Nocco", 28);

ica.getTotalValue();
