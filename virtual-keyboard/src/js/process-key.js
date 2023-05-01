import keys from "../data/keys";
import {
  handleCharacter,
  handleCommandKey,
  handleShift,
} from "./handle-key-press";
import { textarea, keyboard, keyboardState } from "./create-template";

export function processKey(event) {
  event.preventDefault();
  const targetKey = event.code;

  const targetBtn = lightKey(event, targetKey);
  if (event.type === "keydown") manageTextArea(event, targetBtn);
  if (event.type === "keyup") handleShift(event);
  /* 
    это лютый костыль. дело в том,
    что функция handleShift вызывается по цепочке manageTextArea. Но с собой
    передает только event keydown.
    второй if как раз докидывает последний event keyup напрямую 
  */
}

function lightKey(event, targetKey) {
  let targetBtn;

  const { buttons } = keyboardState;

  buttons.forEach((button) => {
    if (button.getAttribute("data-code") === targetKey) {
      if (event.type === "keydown") {
        button.classList.add("active");
        targetBtn = button;
      } else {
        button.classList.remove("active");
      }
    }
  });

  return targetBtn;
}

function manageTextArea(event, targetBtn) {
  if (!keys.keys.find((button) => button.code === event.code)) {
    return;
  }

  keys.keys.forEach((key) => {
    if (key.code === targetBtn.getAttribute("data-code")) {
      key.type
        ? handleCommandKey(targetBtn, event)
        : handleCharacter(targetBtn);
    }
  });
}

/*
  textarea.focus();
  textarea.setSelectionRange(
  textarea.selectionEnd + 1,
  textarea.selectionEnd + 1
  );
*/
