import { createLiAndSymbolProcessing } from "./createLiAndSymbolProcessing.js";
let flag = " ";
export function keyboardSymbol(event) {
  event.preventDefault();

  const level = sessionStorage.getItem("gameLevel");
  const ul = document.querySelector("ul");
  const keyboardWrapper = document.querySelector(".keyboard-wrapper");

  switch (level) {
    case "easy":
      if (event.keyCode < 48 || event.keyCode > 57) return;

      if (flag !== event.code.slice(-1)) {
        let symbol = event.code.slice(-1);
        createLiAndSymbolProcessing(symbol, ul, keyboardWrapper);
      }
      flag = event.code.slice(-1);
      break;

    case "medium":
      if (event.keyCode < 65 || event.keyCode > 90) return;

      if (flag !== event.code.slice(-1).toLowerCase()) {
        let symbol = event.code.slice(-1).toLowerCase();
        createLiAndSymbolProcessing(symbol, ul, keyboardWrapper);
      }
      flag = event.code.slice(-1).toLowerCase();
      break;

    case "hard":
      if (
        (event.keyCode < 65 || event.keyCode > 90) &&
        (event.keyCode < 48 || event.keyCode > 57)
      )
        return;
      if (flag !== event.code.slice(-1).toLowerCase()) {
        let symbol = event.code.slice(-1).toLowerCase();
        createLiAndSymbolProcessing(symbol, ul, keyboardWrapper);
      }
      flag = event.code.slice(-1).toLowerCase();
      break;

    default:
      break;
  }
}
document.addEventListener("keyup", (e) => {
  flag = "";
});
