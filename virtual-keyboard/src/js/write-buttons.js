import { getTemplate } from "./get-template";
import keys from "../data/keys";
import { keyboard, keyboardState, setKeyboardState } from "./create-template";

export function writeButtons(templ = "small", lang = "eng") {
  setKeyboardState(lang);
  const template = getTemplate(templ, lang);

  keyboardState.buttons.forEach((button, counter) =>
    Object.assign(button, {
      textContent: keys.keys[counter][template]
        ? keys.keys[counter][template]
        : keys.keys[counter].letter,
    })
  );

  return [templ, lang];
}
