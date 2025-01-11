export default function createElement(tag, attributes) {
  const element = document.createElement(tag);

  if (attributes) {
    if ("className" in attributes) {
      element.classList.add(...attributes.className);
    }
    if ("id" in attributes) {
      element.id = attributes.id;
    }
    if ("children" in attributes) {
      element.replaceChildren(...attributes.children);
    }
    if ("text" in attributes) {
      element.textContent = attributes.text;
    }
  }

  return element;
}
