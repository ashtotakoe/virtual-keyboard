import { keys } from "./keys";
import { createNode } from "./create-node";
import { getTemplate } from "./get-template";
import { processKey } from "./process-key";
import { handleCommandKey, handleNormalKey } from "./handle-key-press";

const wrapper = createNode({
  tag: "div",
  parent: document.body,
  className: "wrapper",
});

const textarea = createNode({
  tag: "textarea",
  parent: wrapper,
  className: "textarea",
  attr: { autofocus: "" },
});
const keyboard = createNode({
  tag: "div",
  className: "keyboard",
  parent: wrapper,
});

export const keyboardState = {
  templ: "small",
  lang: "eng",
  textAreaData: [],
  textarea: textarea,
};

function init({ templ, lang }) {
  const template = getTemplate(templ, lang);

  keys.forEach((key) => {
    createNode({
      textContent: key[template] ? key[template] : key.letter,
      className: "keyboard__key",
      attr: { "data-code": key.code },
      parent: keyboard,
      listener: "click",
      callback: key.type ? handleCommandKey : handleNormalKey,
    });
  });
}
// document.addEventListener("keypress", (e) => {
//   console.log(keys.find((button) => button.code === e.code));
// });

document.addEventListener("keydown", processKey);
document.addEventListener("keyup", processKey);
init(keyboardState);
