import { writeButtons } from "./write-buttons";
import { keyboardState } from "..";

export function handleCommandKey(targetBtn) {
  if (targetBtn.pointerType) {
    targetBtn = this;
  }

  if (targetBtn.textContent === "caps") {
    keyboardState.templ === "small"
      ? ([keyboardState.templ, keyboardState.lang] = writeButtons(
          "big",
          keyboardState.lang
        ))
      : ([keyboardState.templ, keyboardState.lang] = writeButtons(
          "small",
          keyboardState.lang
        ));
  }
  if (targetBtn.textContent === "lang") {
    keyboardState.lang === "rus"
      ? ([keyboardState.templ, keyboardState.lang] = writeButtons(
          keyboardState.templ,
          "eng"
        ))
      : ([keyboardState.templ, keyboardState.lang] = writeButtons(
          keyboardState.templ,
          "rus"
        ));
  }
  if (targetBtn.textContent === "delete") {
    keyboardState.textAreaData.pop();
    keyboardState.textarea.value = keyboardState.textAreaData.join("");
  }
}

export function handleNormalKey(targetBtn) {
  if (!targetBtn.pointerType) {
    //this func can get either an event or button as a param.
    keyboardState.textarea.value += targetBtn.textContent;
    keyboardState.textAreaData.push(targetBtn.textContent);
  } else {
    keyboardState.textarea.value += this.textContent;
    keyboardState.textAreaData.push(this.textContent);
  }
}
