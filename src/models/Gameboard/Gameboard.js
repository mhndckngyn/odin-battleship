import TILE_STATE from "../../Settings/tileState";

export default class Gameboard {
  constructor() {
    this.board = new Array(10 * 10);
    for (let i = 0; i < 100; i++) {
      this.board[i] = TILE_STATE.NO_SHIP;
    }

    this.ships = [];
  }

  calculateBoardIndexes(coordinates, length, placeVertically) {
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
    const indexes = this.calculateBoardIndexes(
      coordinates,
      ship.getLength(),
      placeVertically,
    );

    if (indexes.some((i) => this.board[i] !== TILE_STATE.NO_SHIP)) {
      return false;
    }

    if (placeVertically && indexes.at(-1) % 10 !== indexes.at(0) % 10) {
      return false;
    }

    if (!placeVertically && indexes.at(-1) % 10 < indexes.at(0) % 10) {
      return false;
    }

    this.ships.push(ship);
    indexes.forEach((i) => (this.board[i] = ship));
    return true;
  }

  calculateAttackIndex(coordinates) {
    const { x, y } = coordinates;
    return y * 10 + x;
  }

  receiveAttack(coordinates) {
    const i = this.calculateAttackIndex(coordinates);
    const tile = this.board[i];

    switch (tile) {
      case TILE_STATE.MISSED:
        return false;
      case TILE_STATE.HIT:
        return false;
      case TILE_STATE.NO_SHIP:
        this.board[i] = TILE_STATE.MISSED;
        return true;
      default:
        const ship = tile;
        ship.hit();
        this.board[i] = TILE_STATE.HIT;
        return true;
    }
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
