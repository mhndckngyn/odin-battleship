import SHIP_LENGTHS from "../../Settings/shipLengths";
import Player from "../Player";
import Ship from "../Ship";

function randomNumberMinIncluded(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export class BotPlayer extends Player {
  constructor() {
    super();
    this.placeShipsRandomly();
    this.attackedTiles = [];
  }

  placeShipsRandomly() {
    const shipsLength = SHIP_LENGTHS.slice();
    shipsLength.forEach((length) => {
      const ship = new Ship(length);
      const placeVertically = Math.random() < 0.5;

      while (true) {
        const x = randomNumberMinIncluded(0, 10);
        const y = randomNumberMinIncluded(0, 10);
        if (this.gameboard.place(ship, { x, y }, placeVertically)) {
          break;
        }
      }
    });
  }

  selectNextTile() {
    let selectedTile;
    do {
      selectedTile = {
        x: randomNumberMinIncluded(0, 10),
        y: randomNumberMinIncluded(0, 10),
      };
    } while (
      this.attackedTiles.some(
        (tile) => tile.x === selectedTile.x && tile.y === selectedTile.y,
      )
    );
    console.log(selectedTile);
    this.attackedTiles.push(selectedTile);
    return selectedTile;
  }

  playTurn() {
    return this.selectNextTile();
  }
}
