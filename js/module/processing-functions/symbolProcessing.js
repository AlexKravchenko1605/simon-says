import { correctSymbol } from "./correctSymbol.js";
import { wrongSymbol } from "./wrongSymbol.js";

export function symbolProcessing(
  answer,
  elem,
  keyboardWrapper,
  symbol,
  className,
  ul
) {
  if (answer) {
    correctSymbol(elem, keyboardWrapper, symbol, ul);
  } else {
    wrongSymbol(keyboardWrapper, className, symbol, ul);
  }
}
