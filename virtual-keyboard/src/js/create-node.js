export function createNode({
  tag = "button",
  className = "",
  textContent = "",
  attr = "",
  parent = null,
  listener = "",
  callback = null,
}) {
  const node = document.createElement(tag);
  node.className = className;
  if (textContent) {
    node.textContent = textContent;
  }
  if (attr) {
    for (const key in attr) {
      node.setAttribute(key, attr[key]);
    }
  }

  if (listener) {
    node.addEventListener(listener, callback);
  }

  if (parent) {
    parent.appendChild(node);
  }
  return node;
}
