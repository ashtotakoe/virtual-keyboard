import { writeButtons } from "./write-buttons";
import { keyboardState } from "./create-template";

export function handleCommandKey(targetBtn, event) {
  if (targetBtn.pointerType) {
    targetBtn = this;
  }

  if (targetBtn.textContent === "caps") {
    keyboardState.templateConfig === "small"
      ? ([keyboardState.templateConfig, keyboardState.language] = writeButtons(
          "big",
          keyboardState.language
        ))
      : ([keyboardState.templateConfig, keyboardState.language] = writeButtons(
          "small",
          keyboardState.language
        ));
  }
  if (targetBtn.textContent === "lang") {
    keyboardState.language === "rus"
      ? ([keyboardState.templateConfig, keyboardState.language] = writeButtons(
          keyboardState.templateConfig,
          "eng"
        ))
      : ([keyboardState.templateConfig, keyboardState.language] = writeButtons(
          keyboardState.templateConfig,
          "rus"
        ));
  }
  if (targetBtn.textContent === "delete") {
    keyboardState.textAreaData.pop();
    keyboardState.textarea.value = keyboardState.textAreaData.join("");
  }
  if (targetBtn.textContent === "shift") handleShift(event);
  if (targetBtn.textContent === "tab") {
    keyboardState.textarea.value += "  ";
    keyboardState.textAreaData.push("  ");
  }
}

export function handleCharacter(targetBtn) {
  if (!targetBtn.pointerType) {
    // this func can get either an event or button as a param.
    keyboardState.textarea.value += targetBtn.textContent;
    keyboardState.textAreaData.push(targetBtn.textContent);
  } else {
    keyboardState.textarea.value += this.textContent;
    keyboardState.textAreaData.push(this.textContent);
  }
}

export function handleShift(event) {
  if (!event) return;

  if (event.type === "keydown") {
    keyboardState.templateConfig === "small"
      ? writeButtons("big", keyboardState.language)
      : writeButtons("small", keyboardState.language);
  } else {
    writeButtons(keyboardState.templateConfig, keyboardState.language);
  }
}
