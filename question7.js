// FRÅGA 7 – Fetch och async/await (5p)
//
// Hämta användare från:
const url = "https://jsonplaceholder.typicode.com/users";
//
// Krav:
// 1. Använd async/await.
// 2. Kontrollera response.ok och kasta ett fel om anropet misslyckas.
// 3. Använd try/catch för felhantering.
// 4. Visa endast användare med id <= 5.
// 5. Rendera användarens namn och e-post i elementet #users i index.html.

const container = document.querySelector("#users");

const getUsers = async () => {
  // Skriv din kod här
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const users = await response.json();
  return users;
};

// Kör funktionen

try {
  const users = await getUsers();

  const mapped = users.filter((user) => user.id <= 5);

  mapped.forEach((user) => {
    const name = user.name;
    const email = user.email;
    const nameElement = document.createElement("h1");
    const emailElement = document.createElement("h2");

    nameElement.textContent = name;
    emailElement.textContent = email;

    container.appendChild(nameElement);
    container.appendChild(emailElement);
  });
} catch (err) {
  console.log("Something went wrong!", err);
}
