import { createSequence } from "./createSequence.js";
import { lightOnButton } from "../ui-functions/lightOnButton.js";
import { getSequence } from "./getSequence.js";
import { cleanUL } from "../ui-functions/cleanUL.js";
import { cleanSessionStorage } from "./cleanSessionStorage.js";

export function toNextRound(
  roundSpan,
  level,
  keyboardWrapper,
  repeatTheSequence_btn,
  nexRound_btn
) {
  cleanSessionStorage("mistake");
  document.querySelector("header").innerHTML = "";
  cleanUL();
  let nextRound = Number(roundSpan.innerText) + 1;
  roundSpan.innerText = nextRound;
  sessionStorage.removeItem("correctAnswer");
  createSequence(nextRound, level);
  let sequence = getSequence();
  lightOnButton(keyboardWrapper, sequence);
  repeatTheSequence_btn.classList.remove("none");
  repeatTheSequence_btn.removeAttribute("disabled");
  nexRound_btn.classList.add("none");
}
