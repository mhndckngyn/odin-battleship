import randomIntegerInclusive from "../../modules/randomNumber";
import SHIP_LENGTHS from "../../settings/shipLengths";
import Gameboard from "../Gameboard";
import Ship from "../Ship";

export default class Bot {
  constructor() {
    this.gameboard = new Gameboard();
    this.attackedTiles = [];
    this.placeShipsRandomly(SHIP_LENGTHS.slice());
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

  async selectNextTile() {
    let selectedTile;
    do {
      selectedTile = {
        x: randomIntegerInclusive(0, 9),
        y: randomIntegerInclusive(0, 9),
      };
    } while (
      this.attackedTiles.some(
        (tile) => tile.x === selectedTile.x && tile.y === selectedTile.y,
      )
    );
    this.attackedTiles.push(selectedTile);
    return new Promise((resolve) => {
      setTimeout(() => resolve(selectedTile), 300);
    });
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
