export default function createElement(tag, attr) {
  const element = document.createElement(tag);

  if ("className" in attr) {
    element.classList.add(attr.className);
  }
  if ("id" in attr) {
    element.id = attr.id;
  }
  if ("children" in attr) {
    element.replaceChildren(...attr.children);
  }

  return element;
}
