// FRÅGA 6 – DOM och event listeners (4p)
//
// I index.html finns en container med id="buttons".
// Skapa fem knappar med hjälp av en for-loop.
// Varje knapp ska visa sitt nummer (1–5).
// När man klickar på en knapp ska den växla mellan klasserna
// "primary" och "secondary".
//
// Tips: använd classList.toggle() eller classList.contains().

const container = document.querySelector("#buttons");

// Skriv din kod här

for (let i = 0; i < 5; i++) {
  const button = document.createElement("button");

  button.textContent = i + 1;
  button.classList = "primary";

  button.addEventListener("click", () => {
    if (
      button.classList.contains("primary") &&
      !button.classList.contains("secondary")
    ) {
      button.classList.remove("primary");
      button.classList.add("secondary");
    } else if (
      !button.classList.contains("primary") &&
      button.classList.contains("secondary")
    ) {
      button.classList.remove("secondary");
      button.classList.add("primary");
    }
  });

  container.appendChild(button);
}
