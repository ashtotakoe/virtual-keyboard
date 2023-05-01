import { getTemplate } from "./get-template";
import { keys } from "./keys";

export function writeButtons(templ = "small", lang = "eng") {
  const template = getTemplate(templ, lang);
  const keyboard = document.querySelector(".keyboard");
  let counter = 0;
  for (let btn of keyboard.children) {
    if (keys[counter][template]) {
      btn.textContent = keys[counter][template];
    } else {
      btn.textContent = keys[counter].letter;
    }
    counter++;
  }
  return [templ, lang];
}
