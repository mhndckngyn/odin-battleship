import createEmptyBoard from "../../modules/createBoard";
import createElement from "../../modules/createElement";
import SHIP_LENGTHS from "../../settings/shipLengths";
import PlayerMap from "./PlayerMap";

export default class BoardPlacer {
  TILE_SIZE = 40;
  DT_ID = "application/id/";

  constructor() {
    this.blankImage = new Image();
    this.blankImage.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    this.playerMap = new PlayerMap(SHIP_LENGTHS.slice());
    this.createUI();
    this.setHandlers();
  }

  createShip(id, length, placeVertically) {
    const ship = createElement("div", {
      id: `ship-${id}`,
      className: ["ship"],
    });
    ship.dataset.id = id;
    ship.setAttribute("draggable", "true");

    ship.style.width = placeVertically
      ? `${this.TILE_SIZE}px`
      : `${this.TILE_SIZE * length + 2 * length - 2}px`;
    ship.style.height = placeVertically
      ? `${this.TILE_SIZE * length + 2 * length - 2}px`
      : `${this.TILE_SIZE}px`;

    return ship;
  }

  createUI() {
    // create board
    this.board = createEmptyBoard("setup-board");
    // start button
    this.startButton = createElement("button", { text: "Start game" });
    // place ships
    this.playerMap.getShipIds().forEach((id) => {
      const s = this.playerMap.getShip(id);
      const ship = this.createShip(id, s.length, s.placeVertically);
      const { x, y } = s.coordinate;
      const tile = this.board.querySelector(
        `.tile[data-x="${x}"][data-y="${y}"]`,
      );
      tile.appendChild(ship);
    });
  }

  getUI() {
    return [this.board, this.startButton];
  }

  setHandlers() {
    const tiles = this.board.querySelectorAll(".tile");
    [...tiles].forEach((tile) => {
      tile.addEventListener("dragenter", this.dragEnterHandler.bind(this));
      tile.addEventListener("dragover", this.dragOverHandler.bind(this));
      tile.addEventListener("dragleave", this.dragLeaveHandler.bind(this));
      tile.addEventListener("drop", this.dropHandler.bind(this));
    });

    const ships = this.board.querySelectorAll(".ship");
    [...ships].forEach((ship) => {
      ship.addEventListener("dragstart", this.dragStartHandler.bind(this));
      ship.addEventListener("click", this.toggleVertical.bind(this));
    });
  }

  async waitUserStart() {
    return new Promise((resolve) => {
      this.startButton.addEventListener("click", () => {
        resolve(this.playerMap.getShips());
      }),
        { once: true };
    });
  }

  toggleVertical(e) {
    const ship = e.target;
    const shipId = ship.dataset.id;

    if (this.playerMap.isTurnable(shipId)) {
      // update map info
      this.playerMap.updateVertical(shipId);
      // update display
      [ship.style.width, ship.style.height] = [
        ship.style.height,
        ship.style.width,
      ];
    }
  }

  createShipShadow(length, placeVertically) {
    const ship = createElement("div", { className: ["shadow"] });

    ship.style.width = placeVertically
      ? `${this.TILE_SIZE}px`
      : `${this.TILE_SIZE * length + 2 * length - 2}px`;
    ship.style.height = placeVertically
      ? `${this.TILE_SIZE * length + 2 * length - 2}px`
      : `${this.TILE_SIZE}px`;

    return ship;
  }

  dragStartHandler(e) {
    const shipId = e.target.dataset.id;
    e.dataTransfer.setData(`${this.DT_ID}${shipId}`, "");
    e.dataTransfer.setDragImage(this.blankImage, 0, 0);
    e.dataTransfer.effectAllowed = "move";
  }

  getTransferId(items) {
    const id = items
      .find((i) => i.type.startsWith(this.DT_ID))
      .type.substring(this.DT_ID.length);

    return id;
  }

  isShip(items) {
    return items.some((i) => i.type.startsWith(this.DT_ID));
  }

  dragEnterHandler(e) {
    const isShipDragged = this.isShip([...e.dataTransfer.items]);

    if (isShipDragged) {
      // ensure dragged element is a ship
      const shipId = this.getTransferId([...e.dataTransfer.items]);
      const coordinate = {
        x: Number(e.currentTarget.dataset.x),
        y: Number(e.currentTarget.dataset.y),
      };
      
      if (
        !e.currentTarget.querySelector(".ship") &&
        this.playerMap.isPlaceable(shipId, coordinate)
      ) {
        // the tile hovered does not contain a ship and the new placement is valid
        e.preventDefault();
        const { length, placeVertically } = this.playerMap.getShip(shipId);
        e.currentTarget.appendChild(this.createShipShadow(length, placeVertically));
        e.dataTransfer.dropEffect = "move";
        e.currentTarget.dataset.placeable = "true";
      }
    }
  }

  dragOverHandler(e) {
    const isShipDragged = this.isShip([...e.dataTransfer.items]);

    if (e.target.dataset.placeable === "true" && isShipDragged) {
      // ensure a tile is hovered and dragged element is a ship
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    }
  }

  dragLeaveHandler(e) {
    // remove shadow in this tile
    const shadow = e.target.querySelector(".shadow");
    if (shadow) {
      shadow.remove();
    }
    delete e.currentTarget.dataset.placeable;
  }

  dropHandler(e) {
    // remove shadow in this tile
    const shadow = e.target.querySelector(".shadow");
    if (shadow) {
      shadow.remove();
    }

    const shipId = this.getTransferId([...e.dataTransfer.items]);
    const ship = this.board.querySelector(`#ship-${shipId}`);
    // update map info
    const newCoordinate = {
      x: Number(e.currentTarget.dataset.x),
      y: Number(e.currentTarget.dataset.y),
    };
    this.playerMap.updateCoordinate(shipId, newCoordinate);
    // update display
    if (e.target !== ship) {
      e.target.appendChild(ship);
      delete e.currentTarget.dataset.placeable;
    }
  }
}
