export const TILE_STATUS = {
  NO_SHIP: null,
  MISSED: false,
  HIT: true,
};

export default class Gameboard {
  constructor() {
    this.board = new Array(10 * 10);
    for (let i = 0; i < 100; i++) {
      this.board[i] = null;
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

  place(ship, coordinates, placeVertically = false) {
    const indexes = this.calculateBoardIndexes(
      coordinates,
      ship.getLength(),
      placeVertically,
    );

    for (const i of indexes) {
      if (this.board[i] !== null) {
        return false;
      }
    }

    for (const i of indexes) {
      this.board[i] = ship;
    }

    this.ships.push(ship);

    return true;
  }

  calculateAttackIndex(coordnates) {
    const { x, y } = coordnates;
    return y * 10 + x;
  }

  receiveAttack(coordinates) {
    const i = this.calculateAttackIndex(coordinates);
    const tile = this.board[i];

    switch (tile) {
      case TILE_STATUS.MISSED:
        return false;
      case TILE_STATUS.HIT:
        return false;
      case TILE_STATUS.NO_SHIP:
        this.board[i] = TILE_STATUS.MISSED;
        return true;
      default:
        const ship = tile;
        ship.hit();
        this.board[i] = TILE_STATUS.HIT;
    }

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
