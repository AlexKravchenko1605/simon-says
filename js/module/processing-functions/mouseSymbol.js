import { createLiAndSymbolProcessing } from "./createLiAndSymbolProcessing.js";

export function mouseSymbol(event, keyboardWrapper, ul) {
  event.preventDefault();

  if (event.target.localName !== "button") return;

  let symbol = event.target.className.slice(-1);
  createLiAndSymbolProcessing(symbol, ul, keyboardWrapper);
}
