import { showNextBtn } from "../ui-functions/showNextBtn.js";
import { toggleClass } from "../ui-functions/toggleClass.js";

export async function correctSymbol(string, keyboardWrapper, symbol, ul) {
  sessionStorage.setItem("correctAnswer", string);
  await toggleClass(keyboardWrapper, "correct_symbol", symbol, ul);
  showNextBtn(keyboardWrapper);
}
