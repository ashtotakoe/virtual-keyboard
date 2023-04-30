import { keys } from "../js-units/keys";

export function processKey(event) {
  event.preventDefault();
  const targetKey = event.code;
  const keyboard = document.querySelector(".keyboard");
  const textarea = document.querySelector(".textarea");

  let targetBtn = lightKey(event, targetKey, keyboard);
  if (event.type === "keydown") manageTextArea(targetBtn, textarea);
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

function manageTextArea(targetBtn, textarea) {
  const textAreaData = textarea.value.split("");
  let targetKey;
  keys.forEach((key) => {
    if (key.code === targetBtn.getAttribute("data-code")) {
      targetKey = key;
    }
  });

  if (!targetKey.type) {
    textAreaData.push(targetBtn.textContent);
    textarea.value = textAreaData.join("");
  }
  if (targetKey) {
    if (targetBtn.textContent === "caps") {
      templ === "small"
        ? ([templ, lang] = writeButtons("big", lang))
        : ([templ, lang] = writeButtons("small", lang));
    }
    if (targetBtn.textContent === "lang") {
      lang === "rus"
        ? ([templ, lang] = writeButtons(templ, "eng"))
        : ([templ, lang] = writeButtons(templ, "rus"));
    }
    if (targetBtn.textContent === "delete") {
      textAreaData.pop();
      textarea.value = textAreaData.join("");
    }
  }
}

/*
  textarea.focus();
  textarea.setSelectionRange(
  textarea.selectionEnd + 1,
  textarea.selectionEnd + 1
  );
*/
