import keys from "../data/keys";
import { createNode } from "./create-node";
import { getTemplate } from "./get-template";
import { processKey } from "./process-key";
import { handleCommandKey, handleCharacter } from "./handle-key-press";

const wrapper = createNode({
  tag: "div",
  parent: document.body,
  className: "wrapper",
});

export const textarea = createNode({
  tag: "textarea",
  parent: wrapper,
  className: "textarea",
  attr: { autofocus: "" },
});
export const keyboard = createNode({
  tag: "div",
  className: "keyboard",
  parent: wrapper,
});

export const keyboardState = {
  templateConfig: "small",
  language: "eng",
  textAreaData: [],
  textarea,
};

function createTemplate({ templateConfig, language }) {
  const template = getTemplate(templateConfig, language);

  keyboardState.buttons = keys.keys.map((key) =>
    createNode({
      textContent: key[template] ? key[template] : key.letter,
      className: "keyboard__key",
      attr: { "data-code": key.code },
      parent: keyboard,
      listener: "click",
      callback: key.type ? handleCommandKey : handleCharacter,
    })
  );
}

document.addEventListener("keydown", processKey);
document.addEventListener("keyup", processKey);
createTemplate(keyboardState);
