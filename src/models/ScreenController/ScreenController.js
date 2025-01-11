import createElement from "../../modules/createElement";
import PubSub from "../../modules/pubSub";
import {
  psBoardChanged,
  psGameEnded,
  psHumanPlayTurn,
  psToHumanTurn,
} from "../../Settings/pubSubEvents";
import TILE_STATE from "../../Settings/tileState";

const ScreenController = (function () {
  function init() {
    PubSub.subscribe(psToHumanTurn, informHumanTurn);
    PubSub.subscribe(psGameEnded, informGameEnd);
    PubSub.subscribe(psBoardChanged, renderBoards);
  }

  function renderBoards(boards) {
    const { humanBoard, botBoard } = boards;
    const boardArea = document.getElementById("board-area");
    boardArea.replaceChildren(
      createBoard(humanBoard, addHumanTileClasses),
      createBoard(botBoard, addBotTileClasses),
    );
  }

  function informHumanTurn() {
    const messageLabel = document.getElementById("message");
    messageLabel.textContent = "It's your turn.";
  }

  function addHumanTileClasses(tile, container_4) {
    if (tile === TILE_STATE.HIT) {
      container_4.classList.add("hit");
    } else if (tile === TILE_STATE.NO_SHIP) {
      container_4.classList.add("unknown");
    } else if (tile === TILE_STATE.MISSED) {
      container_4.classList.add("missed");
    } else {
      container_4.classList.add("ship");
    }
  }

  function addBotTileClasses(tile, container_4, i, j) {
    if (tile === TILE_STATE.HIT) {
      container_4.classList.add("hit");
    } else if (tile === TILE_STATE.MISSED) {
      container_4.classList.add("missed");
    } else {
      container_4.classList.add("unknown");
      container_4.addEventListener("click", () =>
        handleTileClick({ x: j, y: i }),
      );
    }
  }

  function createBoard(board, addTileClasses) {
    /* 
      container:    board
      container_1:  rows
      container_2:  a single row
      container_3:  tiles of a row
      container_4:  a single tile
    */
    const container_1 = [];

    for (let i = 0; i < 10; i++) {
      const row = board.slice(10 * i, 10 * i + 10);
      const container_3 = [];

      for (let j = 0; j < 10; j++) {
        const tile = row[j];
        const container_4 = createElement("button", { className: "tile" });
        addTileClasses(tile, container_4, i, j);
        container_3.push(container_4);
      }

      const container_2 = createElement("div", {
        className: "row",
        children: container_3,
      });
      container_1.push(container_2);
    }

    const container = createElement("div", {
      children: container_1,
    });
    return container;
  }

  function handleTileClick(coord) {
    PubSub.publish(psHumanPlayTurn, coord);
  }

  function informGameEnd() {
    const messageLabel = document.getElementById("message");
    messageLabel.textContent = "Game over!";
  }

  init();
})();

export default ScreenController;
