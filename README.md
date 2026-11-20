# Övningsprov 3

- 10 frågor, totalt 40 poäng.
- Rekommenderad tid: 90 minuter.
- Försök lösa uppgifterna själv innan du söker hjälp.
- Frågorna 1–4 skriver testresultat i webbläsarens Console.
- Frågorna 5–8 använder testytan i `index.html`.
- Fråga 10 är uppdelad i `receipt.js`, `cart.js` och `main.js`.

## Kom igång

1. Packa upp mappen.
2. Öppna mappen i VS Code.
3. Starta `index.html` med Live Server.
4. Välj en fråga i listan och klicka på **Ladda fråga**.
5. Skriv din lösning i respektive `questionN.js`-fil.
6. Öppna webbläsarens utvecklarverktyg och titta i **Console** för `console.log()`.

## Viktigt om fråga 10

Fråga 10 använder ES-moduler. Öppna därför `main.js` genom en lokal utvecklingsserver, till exempel Live Server. Kör den inte genom att dubbelklicka på filen.

`index.html` laddar en fråga i taget. För fråga 10 arbetar du direkt med `receipt.js`, `cart.js` och `main.js`; testa den genom att tillfälligt ändra script-taggen i `index.html` till:

```html
<script type="module" src="main.js"></script>
```

Kom ihåg att återställa till `app.js` när du vill använda frågeväljaren igen.
