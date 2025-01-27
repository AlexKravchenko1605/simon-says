import { createStartPage } from "./createStartPage.js";
import { container } from "../../main.js";
import { fillKeyboard } from "./fillKeyboard.js";
import { createSequence } from "../processing-functions/createSequence.js";
import { lightOnButton } from "./lightOnButton.js";
import { mouseSymbol } from "../processing-functions/mouseSymbol.js";
import { toNextRound } from "../processing-functions/toNextRound.js";
import { getSequence } from "../processing-functions/getSequence.js";
import { disableButton } from "./disableButton.js";
import { cleanSessionStorage } from "../processing-functions/cleanSessionStorage.js";

export function createActiveGamePage(place, level) {
  place.innerHTML = "";

  const wrapper = document.createElement("div");
  const infoWrapper = document.createElement("div");
  const levelDiv = document.createElement("div");
  const roundDiv = document.createElement("div");
  const levelSpan = document.createElement("span");
  const roundSpan = document.createElement("span");
  const keyboardWrapper = document.createElement("div");
  const answerField = document.createElement("ul");
  const repeatTheSequence_btn = document.createElement("button");
  const newGame_btn = document.createElement("button");
  const nexRound_btn = document.createElement("button");

  repeatTheSequence_btn.innerText = "Repeat the sequence";
  newGame_btn.innerText = "New Game";
  nexRound_btn.innerText = "Next";
  levelDiv.innerText = "Level ";
  roundDiv.innerText = "Round ";
  levelSpan.innerText = level.toUpperCase();
  roundSpan.innerText = "1";
  levelSpan.className = "level-info";
  roundSpan.className = "round-info";
  answerField.className = "answer-field";
  repeatTheSequence_btn.className = "repeat-btn";
  newGame_btn.className = "new_game-btn";
  nexRound_btn.className = "next_round-btn none";
  keyboardWrapper.className = "keyboard-wrapper";
  wrapper.className = "activeGame-wrapper";
  infoWrapper.className = "info-wrapper";

  levelDiv.append(levelSpan);
  roundDiv.append(roundSpan);
  infoWrapper.append(levelDiv);
  infoWrapper.append(roundDiv);
  wrapper.append(infoWrapper);
  wrapper.append(answerField);
  wrapper.append(keyboardWrapper);
  wrapper.append(repeatTheSequence_btn);
  wrapper.append(nexRound_btn);
  wrapper.append(newGame_btn);

  newGame_btn.addEventListener("click", () => {
    document.querySelector("header").innerHTML = "";
    cleanSessionStorage("mistake");
    cleanSessionStorage("correctAnswer");
    createStartPage(container);
  });

  fillKeyboard(keyboardWrapper, level);
  createSequence(roundSpan.innerText, level);

  let sequence = getSequence();
  keyboardWrapper.addEventListener("click", (event) =>
    mouseSymbol(event, keyboardWrapper, answerField)
  );

  nexRound_btn.addEventListener("click", () =>
    toNextRound(
      roundSpan,
      level,
      keyboardWrapper,
      repeatTheSequence_btn,
      nexRound_btn
    )
  );

  repeatTheSequence_btn.addEventListener("click", () => {
    cleanSessionStorage("mistake");
    cleanSessionStorage("correctAnswer");
    document.querySelector("header").innerHTML = "";
    answerField.innerHTML = "";
    lightOnButton(keyboardWrapper, getSequence());
    disableButton(repeatTheSequence_btn);
  });

  setTimeout(() => {
    lightOnButton(keyboardWrapper, sequence), 1000;
  });

  return place.append(wrapper);
}
