import './style.scss';
import { keys } from './js-units/keys';
import { createNode } from './js-units/create-node';
import { getTemplate } from './js-units/get-template';
import { lightKey } from './js/key-lighter';

const wrapper = createNode({
  tag: 'div',
  parent: document.body,
  className: 'wrapper',
});

const textarea = createNode({
  tag: 'textarea',
  parent: wrapper,
  className: 'textarea',
  attr: { autofocus: '' },
});
const keyboard = createNode({
  tag: 'div',
  className: 'keyboard',
  parent: wrapper,
});

export const textAreaData = [];

function init(templ = 'small', lang = 'eng') {
  const template = getTemplate(templ, lang);
  keyboard.replaceChildren();

  for (let key of keys) {
    createNode({
      textContent: key[template] ? key[template] : key.letter,
      className: 'keyboard__key',
      parent: keyboard,
      listener: 'click',
      callback: key.type
        ? function () {
            if (this.textContent === 'caps') {
              templ === 'small' ? init('big', lang) : init('small', lang);
            }
            if (this.textContent === 'lang') {
              lang === 'rus' ? init(templ, 'eng') : init(templ, 'rus');
            }
            if (this.textContent === 'delete') {
              textAreaData.pop();
              textarea.value = textAreaData.join('');
              console.log(textarea.selectionEnd);
            }
          }
        : function () {
            textarea.value += this.textContent;
            textAreaData.push(this.textContent);
          },
    });
  }
}

document.addEventListener('keydown', lightKey);
document.addEventListener('keyup', lightKey);
init();
