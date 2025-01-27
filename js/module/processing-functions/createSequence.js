import { data } from "../data/data.js";

export function createSequence(round, level) {
  let sequence = "";

  const min = 0;
  const max = data[level].length - 1;

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  for (let i = 0; i < round * 2; i++) {
    sequence += data[level][randomInteger(min, max)];
  }

  sessionStorage.setItem("sequence", sequence);
}
