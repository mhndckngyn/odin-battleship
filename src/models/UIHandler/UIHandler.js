import createElement from "../../modules/createElement";
import TILE_STATE from "../../settings/tileState";

class UIHandler {
  playerBoardId = "player-board";
  botBoardId = "bot-board";

  constructor() {
    this.botBoard = this.createBotBoard();
    this.announcers = [createElement("p"), createElement("p")];
  }

  addAnnouncement(message) {
    this.announcers[0].textContent = this.announcers[1].textContent;
    this.announcers[1].textContent = message;
  }

  async requestPlayerMove() {
    const coord = await this.waitUserMove(this.botBoard);
    return coord;
  }

  async waitUserMove(board) {
    return new Promise((resolve) => {
      const sendCoord = (event) => {
        const target = event.target;
        if (target.classList.contains("unknown")) {
          board.removeEventListener("click", sendCoord);
          const x = target.dataset.x;
          const y = target.dataset.y;
          resolve({ x, y });
        }
      };

      board.addEventListener("click", sendCoord);
    });
  }

  announceTurnResult(attacker, coord, isHit) {
    const numberToLetter = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
      6: "G",
      7: "H",
      8: "I",
      9: "J",
    };
    const hitOrMiss = isHit ? "hits a ship" : "misses";
    this.addAnnouncement(
      `${attacker} launches an attack on ${numberToLetter[coord.x]}${Number(coord.y) + 1} and ${hitOrMiss}!`,
    );
  }

  announceGameEnd(winner) {
    this.addAnnouncement(`${winner} has won the game!`);
  }

  updatePlayerBoard(coord, isHit) {
    const tile = createElement("button", {
      className: ["tile", isHit ? "hit" : "missed"],
    });
    const currentTile = this.getTileFromCoord(this.playerBoard, coord);
    currentTile.replaceWith(tile);
  }

  updateBotBoard(coord, isHit) {
    const tile = createElement("button", {
      className: ["tile", isHit ? "hit" : "missed"],
    });
    const currentTile = this.getTileFromCoord(this.botBoard, coord);
    currentTile.replaceWith(tile);
  }

  getTileFromCoord(board, coord) {
    const tile = board.querySelector(
      `[data-x='${coord.x}'][data-y='${coord.y}']`,
    );
    return tile;
  }

  createBotBoard() {
    const board = this.createEmptyBoard(this.botBoardId);
    const tiles = board.getElementsByClassName("tile");
    for (const tile of tiles) {
      tile.classList.add("unknown");
    }

    return board;
  }

  createPlayerBoard(map) {
    function calculateTileIndex(x, y) {
      return y * 10 + Number(x);
    }

    const board = this.createEmptyBoard(this.playerBoardId);
    const tiles = board.getElementsByClassName("tile");
    for (const tile of tiles) {
      const { x, y } = tile.dataset;
      const i = calculateTileIndex(x, y);
      if (map[i] !== TILE_STATE.NO_SHIP) {
        tile.classList.add("ship");
      }
    }

    this.playerBoard = board;
    return board;
  }

  createEmptyBoard(id) {
    const rows = [];

    // create labels for columns
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const lettersRow = [
      createElement("div", { className: ["board-label"] }),
      ...letters.map((letter) => {
        const container = createElement("div", {
          className: ["board-label"],
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
          className: ["board-label"],
          text: y + 1,
        }),
      );
      for (let x = 0; x < 10; x++) {
        const tile = createElement("button", {
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
}

export default UIHandler;
