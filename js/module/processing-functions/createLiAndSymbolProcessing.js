import { checkSymbolInSequence } from "../processing-functions/checkSymbolInSequence.js";
import { symbolProcessing } from "./symbolProcessing.js";

export function createLiAndSymbolProcessing(symbol, ul, keyboardWrapper) {
  let li = document.createElement("li");
  li.innerText = symbol;
  li.className = `key_${symbol}`;
  ul.append(li);
  if (!sessionStorage.getItem("correctAnswer")) {
    let answer = checkSymbolInSequence(symbol);
    symbolProcessing(
      answer,
      symbol,
      keyboardWrapper,
      symbol,
      "wrong_symbol",
      ul
    );
  } else {
    let correctAnswer = sessionStorage.getItem("correctAnswer");
    let newString = correctAnswer.concat(symbol);
    let answer = checkSymbolInSequence(newString);

    symbolProcessing(
      answer,
      newString,
      keyboardWrapper,
      symbol,
      "wrong_symbol",
      ul
    );
  }
}
