export function lightKey(event) {
  event.preventDefault();

  const targetKey = event.key;
  const keyboard = document.querySelector(".keyboard");
  const textarea = document.querySelector(".textarea");
  const textAreaData = textarea.value.split("");

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
