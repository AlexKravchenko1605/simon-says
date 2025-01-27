import { disableAllButtons } from "../ui-functions/disableAllButtons.js";
import { disableButton } from "../ui-functions/disableButton.js";
import { keyboardSymbol } from "../processing-functions/keyboardSymbol.js";

export function addMistake() {
  const header = document.querySelector(".header");
  if (!sessionStorage.getItem("mistake")) {
    sessionStorage.setItem("mistake", 1);
    let mistake = sessionStorage.getItem("mistake");

    header.innerText = `You have ${mistake} mistake, be careful! `;
  } else {
    header.innerHTML = `You loose, try again! `;

    const keyboardWrapper = document.querySelector(".keyboard-wrapper");
    const repeat_btn = document.querySelector(".repeat-btn");

    document.removeEventListener("keydown", keyboardSymbol);
    console.log("remove keydown keyboardsymbol from addmistake");
    document.removeEventListener("keyup", keyboardSymbol);
    console.log("remove keyup keyboardsymbol from addmistake");
    disableAllButtons(keyboardWrapper);
    disableButton(repeat_btn);
  }
}
