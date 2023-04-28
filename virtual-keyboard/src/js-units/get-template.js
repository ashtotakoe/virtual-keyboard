export function getTemplate(template, lang) {
  if (template === "small" && lang === "eng") {
    return "letter";
  }
  if (template === "big" && lang === "eng") {
    return "letterBig";
  }
  if (template === "small" && lang === "rus") {
    return "rusLetter";
  }
  if (template === "big" && lang === "rus") {
    return "rusLetterBig";
  }
}
