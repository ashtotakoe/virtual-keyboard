import { keys } from "./keys";
import { handleNormalKey, handleCommandKey } from "./handle-key-press";

export function processKey(event) {
  event.preventDefault();
  const targetKey = event.code;
  const keyboard = document.querySelector(".keyboard");
  const textarea = document.querySelector(".textarea");

  let targetBtn = lightKey(event, targetKey, keyboard);
  if (event.type === "keydown") manageTextArea(targetBtn, textarea, event);
}

function lightKey(event, targetKey, keyboard) {
  let targetBtn = null;

  for (let i = 0; i < keyboard.children.length; i++) {
    const btn = keyboard.children[i];
    if (btn.getAttribute("data-code") === targetKey) {
      if (event.type === "keydown") {
        btn.classList.add("active");
        targetBtn = btn;
      } else {
        btn.classList.remove("active");
      }
    }
  }
  return targetBtn;
}

function manageTextArea(targetBtn, textarea, event) {
  if (!keys.find((button) => button.code === event.code)) return;

  const textAreaData = textarea.value.split("");
  let targetKey;
  keys.forEach((key) => {
    if (key.code === targetBtn.getAttribute("data-code")) {
      targetKey = key;
    }
  });

  if (!targetKey.type) handleNormalKey(targetBtn);
  if (targetKey) handleCommandKey(targetBtn);
}

/*
  textarea.focus();
  textarea.setSelectionRange(
  textarea.selectionEnd + 1,
  textarea.selectionEnd + 1
  );
*/
