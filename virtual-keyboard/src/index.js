import "./style.scss";
import { keys } from "./js-units/keys";
import { createNode } from "./js-units/create-button";
import { getTemplate } from "./js-units/get-template";

const keyboard = createNode({
  tag: "div",
  className: "keyboard",
  parent: document.body,
});
console.log(keyboard.childNodes);

function init(templ = "small", lang = "eng") {
  const template = getTemplate(templ, lang);
  keyboard.replaceChildren();

  for (let key of keys) {
    createNode({
      textContent: key[template] ? key[template] : key.letter,
      className: "keyboard__key",
      parent: keyboard,
      listener: "click",
      callback: key.type
        ? function () {
            if (this.textContent === "caps") {
              templ === "small" ? init("big", lang) : init("small", lang);
            }
            if (this.textContent === "lang") {
              lang === "rus" ? init(templ, "eng") : init(templ, "rus");
            }
          }
        : function () {
            console.log(this.textContent);
          },
    });
  }
}

init();
