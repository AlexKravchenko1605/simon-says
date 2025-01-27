import { cleanSessionStorage } from "../processing-functions/cleanSessionStorage.js";
import { createActiveGamePage } from "./createActiveGamePage.js";
import { fillKeyboard } from "./fillKeyboard.js";

export function createStartPage(container) {
  cleanSessionStorage("mistake");
  cleanSessionStorage("correctAnswer");
  container.innerHTML = "";
  const h1 = document.createElement("h1");
  const levelWrapper = document.createElement("div");
  const div_1 = document.createElement("div");
  const div_2 = document.createElement("div");
  const div_3 = document.createElement("div");
  const keyboardWrapper = document.createElement("div");
  const start_btn = document.createElement("button");
  const easy_level_radio = document.createElement("input");
  const medium_level_radio = document.createElement("input");
  const hard_level_radio = document.createElement("input");
  const easy_label = document.createElement("label");
  const medium_label = document.createElement("label");
  const hard_label = document.createElement("label");

  h1.innerText = "Simon Says!";
  start_btn.innerText = "Start";
  levelWrapper.className = "level-wrapper";
  div_1.className = "input-wrapper";
  div_2.className = "input-wrapper";
  div_3.className = "input-wrapper";
  keyboardWrapper.className = "keyboard-wrapper";
  start_btn.className = "start-btn";

  easy_level_radio.setAttribute("type", "radio");
  easy_level_radio.setAttribute("id", "easy");
  easy_level_radio.setAttribute("name", "level");
  easy_level_radio.setAttribute("value", "easy");

  medium_level_radio.setAttribute("type", "radio");
  medium_level_radio.setAttribute("id", "medium");
  medium_level_radio.setAttribute("name", "level");
  medium_level_radio.setAttribute("value", "medium");
  hard_level_radio.setAttribute("type", "radio");
  hard_level_radio.setAttribute("id", "hard");
  hard_level_radio.setAttribute("name", "level");
  hard_level_radio.setAttribute("value", "hard");

  easy_label.setAttribute("for", "easy");
  medium_label.setAttribute("for", "medium");
  hard_label.setAttribute("for", "hard");

  easy_label.innerText = "Easy";
  medium_label.innerText = "Medium";
  hard_label.innerText = "Hard";

  div_1.append(easy_level_radio);
  div_1.append(easy_label);
  div_2.append(medium_level_radio);
  div_2.append(medium_label);
  div_3.append(hard_level_radio);
  div_3.append(hard_label);

  levelWrapper.append(div_1);
  levelWrapper.append(div_2);
  levelWrapper.append(div_3);

  container.append(h1);
  container.append(levelWrapper);
  container.append(keyboardWrapper);
  container.append(start_btn);

  const allRadioInputs = [
    easy_level_radio,
    medium_level_radio,
    hard_level_radio,
  ];

  function setGameLevel(e) {
    const level = e.srcElement.defaultValue;
    sessionStorage.setItem("gameLevel", level);
  }

  function getGameLevel() {
    const level = sessionStorage.getItem("gameLevel");
    return level;
  }

  function setCheckedAttribute(id) {
    document.getElementById(`${id}`).setAttribute("checked", "checked");
  }

  function checkLevel() {
    if (!sessionStorage.getItem("gameLevel")) {
      sessionStorage.setItem("gameLevel", "easy");
      const level = getGameLevel();
      setCheckedAttribute(level);
      fillKeyboard(keyboardWrapper, level);
    }
    const level = getGameLevel();
    setCheckedAttribute(level);
    fillKeyboard(keyboardWrapper, level);
    return level;
  }

  allRadioInputs.forEach((item) => {
    item.addEventListener("change", (e) => {
      setGameLevel(e), fillKeyboard(keyboardWrapper, getGameLevel());
    });
  });

  start_btn.addEventListener("click", () => {
    createActiveGamePage(container, checkLevel());
    cleanSessionStorage("correctAnswer");
    cleanSessionStorage("mistake");
  });
  checkLevel();
  return container;
}
