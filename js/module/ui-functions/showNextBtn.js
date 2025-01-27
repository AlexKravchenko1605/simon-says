import { disableAllButtons } from "../ui-functions/disableAllButtons.js";
import { keyboardSymbol } from "../processing-functions/keyboardSymbol.js";
import { disableButton } from "./disableButton.js";

export function showNextBtn(keyboardWrapper) {
  let sequence = sessionStorage.getItem("sequence");
  let correctAnswer = sessionStorage.getItem("correctAnswer");
  const nextBtn = document.querySelector(".next_round-btn");
  const repeatBtn = document.querySelector(".repeat-btn");
  const roundSpan = document.querySelector(".round-info");
  const header = document.querySelector("header");

  if (sequence === correctAnswer && Number(roundSpan.innerText) !== 5) {
    disableAllButtons(keyboardWrapper);
    document.removeEventListener("keydown", keyboardSymbol);
    header.innerHTML = "";
    header.innerText = "Good job!!!";
    repeatBtn.classList.add("none");
    nextBtn.classList.remove("none");
  }

  if (sequence === correctAnswer && Number(roundSpan.innerText) === 5) {
    header.innerHTML = "";
    header.innerText = "You WIN!!! Try another levels!";
    disableButton(repeatBtn);
  }
  return;
}
