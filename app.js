const questionSelect = document.querySelector("#questionSelect");
const loadButton = document.querySelector("#loadButton");
const clearButton = document.querySelector("#clearButton");
const output = document.querySelector("#output");

let currentScript = null;

function clearTestArea() {
  document.querySelector("#products").replaceChildren();
  document.querySelector("#buttons").replaceChildren();
  document.querySelector("#users").replaceChildren();
  document.querySelector("#todos").replaceChildren();
}

function showMessage(message) {
  output.textContent = message;
}

async function loadQuestion() {
  const number = questionSelect.value;
  clearTestArea();
  showMessage(`Laddar question${number}.js …`);

  // Ta bort föregående script så att frågan kan laddas om.
  if (currentScript) currentScript.remove();

  const script = document.createElement("script");
  script.type = "module";
  script.src = `./question${number}.js?reload=${Date.now()}`;
  script.onload = () => showMessage(
    `question${number}.js har laddats.\n\nResultat från console.log visas i webbläsarens utvecklarverktyg.`
  );
  script.onerror = () => showMessage(
    `Kunde inte ladda question${number}.js. Kontrollera att filen finns och att du kör sidan via Live Server.`
  );

  currentScript = script;
  document.body.append(script);
}

loadButton.addEventListener("click", loadQuestion);
clearButton.addEventListener("click", () => showMessage("Testytan är rensad."));
loadQuestion();
