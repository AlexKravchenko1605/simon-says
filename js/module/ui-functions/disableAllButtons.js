export function disableAllButtons(place) {
  place
    .querySelectorAll("button")
    .forEach((item) => item.setAttribute("disabled", "disabled"));
}
