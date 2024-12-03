import Gameboard from "../Gameboard";

export default class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }
  
  getBoard() {
    return this.gameboard.board;
  }

  receiveAttack(coord) {
    this.gameboard.receiveAttack(coord);
  }

  isAllSunk() {
    return this.gameboard.isAllSunk();
  }
}
