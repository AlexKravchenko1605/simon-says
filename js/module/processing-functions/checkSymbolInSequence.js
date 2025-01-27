import { getSequence } from "./getSequence.js";

export function checkSymbolInSequence(symbol) {
  let sequence = getSequence();
  return sequence.startsWith(`${symbol}`);
}
