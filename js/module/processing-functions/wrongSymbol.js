import { addMistake } from "../processing-functions/addMistake.js";
import { toggleClass } from "../ui-functions/toggleClass.js";
import { delayFunction } from "./delayFunction.js";

export async function wrongSymbol(keyboardWrapper, className, symbol, ul) {
  let speed = 300;
  toggleClass(keyboardWrapper, className, symbol, ul);
  await delayFunction(speed);
  addMistake();
  return;
}
