import { delayFunction } from "../processing-functions/delayFunction.js";
import { disableAllButtons } from "./disableAllButtons.js";
import { keyboardSymbol } from "../processing-functions/keyboardSymbol.js";
import { removeDisabledAttribute } from "./removeDisableAttribute.js";

export async function lightOnButton(place, sequence) {
  document.removeEventListener("keydown", keyboardSymbol);
  disableAllButtons(place);

  let speed = 500;

  for (let i = 0; i < sequence.length; i++) {
    await delayFunction(speed);
    place.querySelector(`.key-${sequence[i]}`).classList.add("active");
    await delayFunction(speed);
    place.querySelector(`.key-${sequence[i]}`).classList.remove("active");
  }
  removeDisabledAttribute(place);
  document.addEventListener("keydown", keyboardSymbol);
}
