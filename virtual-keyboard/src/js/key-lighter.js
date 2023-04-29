import { textAreaData } from "..";

export function lightKey(event) {
  event.preventDefault();

  const keyboard = document.querySelector(".keyboard");
  const targetKey = event.key;
  const textarea = document.querySelector(".textarea");

  console.log(keyboard.children);

  for (let key in keyboard.children) {
    const btn = keyboard.children[key];

    if (btn.textContent === targetKey) {
      if (event.type === "keydown") {
        btn.classList.add("active");
        textAreaData.push(targetKey);
      } else {
        btn.classList.remove("active");
      }
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
