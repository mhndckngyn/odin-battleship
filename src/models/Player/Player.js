import Gameboard from "../Gameboard";
import Ship from "../Ship";

export default class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }
  
  getBoard() {
    return this.gameboard.board;
  }

  receiveAttack(coord) {
    return this.gameboard.receiveAttack(coord);
  }

  isAllSunk() {
    return this.gameboard.isAllSunk();
  }
  
  setUpBoard(shipMap) {
    shipMap.forEach(s => {
      const ship = new Ship(s.length);
      this.gameboard.place(ship, s.coord, s.placeVertically);
    })

    return this.getBoard();
  }
}
