// FRÅGA 8 – Todo-lista och array methods (4p)
//
// Hämta todos från:
const url = "https://jsonplaceholder.typicode.com/todos";
//
// Krav:
// 1. Hämta datan med fetch().
// 2. Begränsa först resultatet till de 15 första todos.
// 3. Filtrera sedan fram todos där completed är false.
// 4. Rendera titlarna i elementet #todos i index.html.
// 5. Hantera eventuella fel.

const container = document.querySelector("#todos");

// Skriv din kod här

async function getTodos() {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const todos = await response.json();
  return todos;
}

try {
  const todos = await getTodos();

  const filteredTodos = todos.filter(
    (todo) => todo.id <= 15 && !todo.completed,
  );

  filteredTodos.forEach((todo) => {
    const element = document.createElement("p");
    element.textContent = todo.title;

    container.appendChild(element);
  });
  console.log(filteredTodos);
} catch (error) {
  console.log(error);
}
