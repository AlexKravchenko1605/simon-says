import { delayFunction } from "../processing-functions/delayFunction.js";
import { keyboardSymbol } from "../processing-functions/keyboardSymbol.js";

export async function toggleClass(place, className, symbol, ul) {
  let speed = 300;

  ul.querySelector(`.key_${symbol}:last-child`).classList.add(`${className}`);
  place.querySelector(`.key-${symbol}`).classList.add(`${className}`);
  document.removeEventListener("keydown", keyboardSymbol);
  console.log("remove keydown from toggle class");
  await delayFunction(speed);
  place.querySelector(`.key-${symbol}`).classList.remove(`${className}`);
  document.addEventListener("keydown", keyboardSymbol);
  console.log("add keydown from toggle class");

  return;
}
