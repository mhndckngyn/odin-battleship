import createElement from "../../modules/createElement";

class UIHandler {
  playerBoardId = "player-board";
  botBoardId = "bot-board";

  constructor(playerMap) {
    this.botBoard = this.createBotBoard();
    this.playerBoard = this.createPlayerBoard(playerMap);
    this.announcers = [createElement("p"), createElement("p")];
  }

  addAnnouncement(message) {
    this.announcers[0].textContent = this.announcers[1].textContent;
    this.announcers[1].textContent = message;
  }

  async requestPlayerMove() {
    const coordinate = await this.waitUserMove(this.botBoard);
    return coordinate;
  }

  async waitUserMove(board) {
    return new Promise((resolve) => {
      const sendCoordinate = (event) => {
        const target = event.target;
        if (target.classList.contains("unknown")) {
          board.removeEventListener("click", sendCoordinate);
          const x = target.dataset.x;
          const y = target.dataset.y;
          resolve({ x, y });
        }
      };

      board.addEventListener("click", sendCoordinate);
    });
  }

  announceTurnResult(attacker, coordinate, isHit) {
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
      `${attacker} launches an attack on ${numberToLetter[coordinate.x]}${Number(coordinate.y) + 1} and ${hitOrMiss}!`,
    );
  }

  announceGameEnd(winner) {
    this.addAnnouncement(`${winner} has won the game!`);
  }

  updatePlayerBoard(coordinate, isHit) {
    const tile = createElement("button", {
      className: ["tile", isHit ? "hit" : "missed"],
    });
    const currentTile = this.getTileFromCoord(this.playerBoard, coordinate);
    currentTile.replaceWith(tile);
  }

  updateBotBoard(coordinate, isHit) {
    const tile = createElement("button", {
      className: ["tile", isHit ? "hit" : "missed"],
    });
    const currentTile = this.getTileFromCoord(this.botBoard, coordinate);
    currentTile.replaceWith(tile);
  }

  getTileFromCoord(board, coordinate) {
    const tile = board.querySelector(
      `[data-x='${coordinate.x}'][data-y='${coordinate.y}']`,
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
    function calculateShipCoordinates(startCoordinate, length, placeVertically) {
      const coordinates = [];

      for (let i = 0; i < length; i++) {
        const x = placeVertically ? startCoordinate.x : startCoordinate.x + i;
        const y = placeVertically ? startCoordinate.y + i : startCoordinate.y;
        coordinates.push({ x, y });
      }

      return coordinates;
    }

    const board = this.createEmptyBoard(this.playerBoardId);

    for (const ship of map) {
      const coordinates = calculateShipCoordinates(
        ship.coordinate,
        ship.length,
        ship.placeVertically,
      );

      for (const c of coordinates) {
        const tile = board.querySelector(`[data-x='${c.x}'][data-y='${c.y}']`);
        tile.classList.add("ship");
      }
    }

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
