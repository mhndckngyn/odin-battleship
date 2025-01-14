import createElement from "./createElement";

export default function createEmptyBoard(id) {
  const rows = [];

  // create labels for columns
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const lettersRow = [
    createElement("div", { className: ["label"] }),
    ...letters.map((letter) => {
      const container = createElement("div", {
        className: ["label"],
        text: letter,
      });
      return container;
    }),
  ];
  rows.push(
    createElement("div", { className: ["label-row"], children: lettersRow }),
  );

  // create tile rows with number label for each row
  for (let y = 0; y < 10; y++) {
    const row = [];
    row.push(
      createElement("div", {
        className: ["label"],
        text: y + 1,
      }),
    );
    for (let x = 0; x < 10; x++) {
      const tile = createElement("div", {
        className: ["tile"],
      });
      tile.dataset.x = x;
      tile.dataset.y = y;
      row.push(tile);
    }
    rows.push(
      createElement("div", { className: ["board-row"], children: row }),
    );
  }

  const board = createElement("div", { id, children: rows });
  return board;
}
