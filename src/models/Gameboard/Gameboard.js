import TILE_STATE from "../../settings/tileState";

export default class Gameboard {
  constructor() {
    this.board = new Array(10 * 10);
    for (let i = 0; i < 100; i++) {
      this.board[i] = TILE_STATE.NO_SHIP;
    }

    this.ships = [];
  }

  calculateShipIndexes(coordinates, length, placeVertically) {
    const indexes = [];
    const { x, y } = coordinates;
    const startingIndex = y * 10 + x;

    if (placeVertically) {
      for (let i = 0; i < length; i++) {
        indexes.push(startingIndex + 10 * i);
      }
    } else {
      for (let i = 0; i < length; i++) {
        indexes.push(startingIndex + i);
      }
    }

    return indexes;
  }

  place(ship, coordinates, placeVertically) {
    const indexes = this.calculateShipIndexes(
      coordinates,
      ship.getLength(),
      placeVertically,
    );

    if (!this.isPlaceable(indexes, placeVertically)) {
      return false;
    }

    this.ships.push(ship);
    indexes.forEach((i) => (this.board[i] = ship));
    return true;
  }

  isPlaceable(indexes, placeVertically) {
    if (indexes.some((i) => this.board[i] !== TILE_STATE.NO_SHIP)) {
      // cannot place on occupied tile
      return false;
    }

    if (placeVertically && indexes.at(-1) % 10 !== indexes.at(0) % 10) {
      // cannot place on 2 columns
      return false;
    }

    if (!placeVertically && indexes.at(-1) % 10 < indexes.at(0) % 10) {
      // cannot place on 2 rows
      return false;
    }

    return true;
  }

  calculateAttackIndex(coordinates) {
    const { x, y } = coordinates;
    return y * 10 + Number(x);
  }

  receiveAttack(coordinates) {
    const i = this.calculateAttackIndex(coordinates);
    const tile = this.board[i];

    if (tile === TILE_STATE.NO_SHIP) {
      this.board[i] = TILE_STATE.MISSED;
      return false;
    }

    const shipOnTile = tile;
    shipOnTile.hit();
    this.board[i] = TILE_STATE.HIT;
    return true;
  }

  isAllSunk() {
    for (const ship of this.ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }

    return true;
  }
}
