import randomIntegerInclusive from "../../modules/randomNumber";
import SHIP_LENGTHS from "../../settings/shipLengths";
import Gameboard from "../Gameboard";
import Ship from "../Ship";

const LAST_USED_QUEUE = {
  vertical: 0,
  horizontal: 1,
  none: 2,
};

export default class Bot {
  constructor() {
    this.gameboard = new Gameboard();
    this.placeShipsRandomly(SHIP_LENGTHS.slice());
    this.attackedTiles = [];
    this.lastAttackedTile = {};
    this.lastUsedQueue = LAST_USED_QUEUE.none;
    this.verticalAttackQueue = [];
    this.horizontalAttackQueue = [];
  }

  placeShipsRandomly(shipsLength) {
    shipsLength.forEach((length) => {
      const ship = new Ship(length);
      const placeVertically = Math.random() < 0.5;

      while (true) {
        const x = randomIntegerInclusive(0, 9);
        const y = randomIntegerInclusive(0, 9);
        if (this.gameboard.place(ship, { x, y }, placeVertically)) {
          break;
        }
      }
    });
  }

  isTileChosenBefore(tile) {
    return this.attackedTiles.some((t) => t.x === tile.x && t.y === tile.y);
  }

  selectRandomTile() {
    let selectedTile;
    do {
      selectedTile = {
        x: randomIntegerInclusive(0, 9),
        y: randomIntegerInclusive(0, 9),
      };
    } while (this.isTileChosenBefore(selectedTile));
    return selectedTile;
  }

  async selectNextTile() {
    let selectedTile;
    if (this.verticalAttackQueue.length > 0) {
      selectedTile = this.verticalAttackQueue.shift();
      this.lastUsedQueue = LAST_USED_QUEUE.vertical;
    } else if (this.horizontalAttackQueue.length > 0) {
      selectedTile = this.horizontalAttackQueue.shift();
      this.lastUsedQueue = LAST_USED_QUEUE.horizontal;
    } else {
      selectedTile = this.selectRandomTile();
      this.lastUsedQueue = LAST_USED_QUEUE.none;
    }

    this.attackedTiles.push(selectedTile);
    this.lastAttackedTile = selectedTile;
    return new Promise((resolve) => {
      setTimeout(() => resolve(selectedTile), 300);
    });
  }

  registerHit() {
    // if last queue used is none, push to both queues
    // otherwise push to correspond queue and clear the other queue
    if (this.lastUsedQueue === LAST_USED_QUEUE.vertical) {
      this.horizontalAttackQueue = [];
      const nextTile = {
        x: this.lastAttackedTile.x,
        y: this.lastAttackedTile.y + 1,
      };

      if (!this.isTileChosenBefore(nextTile) && nextTile.y <= 9) {
        this.verticalAttackQueue.push(nextTile);
      }
    } else if (this.lastUsedQueue === LAST_USED_QUEUE.horizontal) {
      this.verticalAttackQueue = [];
      const nextTile = {
        x: this.lastAttackedTile.x + 1,
        y: this.lastAttackedTile.y,
      };

      if (!this.isTileChosenBefore(nextTile) && nextTile.x <= 9) {
        this.horizontalAttackQueue.push(nextTile);
      }
    } else {
      this.horizontalAttackQueue = [
        { x: this.lastAttackedTile.x - 1, y: this.lastAttackedTile.y },
        { x: this.lastAttackedTile.x + 1, y: this.lastAttackedTile.y },
      ].filter(
        (tile) => !this.isTileChosenBefore(tile) && tile.x >= 0 && tile.x <= 9,
      );

      this.verticalAttackQueue = [
        ...this.verticalAttackQueue,
        { x: this.lastAttackedTile.x, y: this.lastAttackedTile.y - 1 },
        { x: this.lastAttackedTile.x, y: this.lastAttackedTile.y + 1 },
      ].filter(
        (tile) => !this.isTileChosenBefore(tile) && tile.y >= 0 && tile.y <= 9,
      );
    }
  }

  getBoard() {
    return this.gameboard.board;
  }

  receiveAttack(coordiantes) {
    return this.gameboard.receiveAttack(coordiantes);
  }

  isAllSunk() {
    return this.gameboard.isAllSunk();
  }
}
