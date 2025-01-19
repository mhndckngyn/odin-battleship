import Gameboard from "../Gameboard";
import Ship from "../Ship";

export default class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  getBoard() {
    return this.gameboard.board;
  }

  receiveAttack(coordinate) {
    return this.gameboard.receiveAttack(coordinate);
  }

  isAllSunk() {
    return this.gameboard.isAllSunk();
  }

  setUpBoard(map) {
    map.forEach((s) => {
      const ship = new Ship(s.length);
      this.gameboard.place(ship, s.coordinate, s.placeVertically);
    });
  }
}
