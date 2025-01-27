export function fillKeyboard(place, level) {
  switch (level) {
    case "easy":
      place.innerHTML = "";
      for (let i = 0; i <= 9; i++) {
        const button = document.createElement("button");
        button.innerText = i;
        button.classList.add(`key-${i}`);

        place.append(button);
      }
      break;
    case "medium":
      place.innerHTML = "";
      for (let i = 97; i <= 122; i++) {
        const button = document.createElement("button");
        button.innerText = String.fromCharCode(i);
        button.classList.add(`key-${String.fromCharCode(i)}`);

        place.append(button);
      }
      break;
    case "hard":
      place.innerHTML = "";
      for (let i = 0; i <= 9; i++) {
        const button = document.createElement("button");
        button.innerText = i;
        button.classList.add(`key-${i}`);

        place.append(button);
      }
      for (let i = 97; i <= 122; i++) {
        const button = document.createElement("button");
        button.innerText = String.fromCharCode(i);
        button.classList.add(`key-${String.fromCharCode(i)}`);

        place.append(button);
      }

      break;
  }
}
