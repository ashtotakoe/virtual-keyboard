document.addEventListener("keypress", function (event) {
  const targetKey = event.key;

  for (let key in keyboard.children) {
    const btn = keyboard.children[key];

    if (btn.textContent === targetKey) {
      btn.classList.add("active");
    }
  }
});
