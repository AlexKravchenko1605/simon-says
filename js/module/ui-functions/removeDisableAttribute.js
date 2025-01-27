export function removeDisabledAttribute(place) {
  place
    .querySelectorAll("button")
    .forEach((item) => item.removeAttribute("disabled"));
}
