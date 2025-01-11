import Bot from "../Bot";
import Player from "../Player";

export default class GameController {
  playerName = "Player";
  botName = "Bot";

  constructor(UIHandler, playerMap) {
    this._UIHandler = UIHandler;
    
    this.player = new Player();
    const playerBoard = this.player.setUpBoard(playerMap);
    this._UIHandler.createPlayerBoard(playerBoard);
    this.attacker = this.player;

    this.bot = new Bot();
    this.defender = this.bot;
    
    this.isGameEnded = false;
  }

  async requestPlayerMove() {
    const coord = await this._UIHandler.requestPlayerMove();
    return coord;
  }
  
  async playPlayerTurn() {
    const coord = await this.requestPlayerMove();
    const isHit = this.bot.receiveAttack(coord);
    this._UIHandler.updateBotBoard(coord, isHit);
    this._UIHandler.announceTurnResult(this.playerName, coord, isHit);
  }

  playBotTurn() {
    const coord = this.bot.selectNextTile();
    const isHit = this.player.receiveAttack(coord);
    this._UIHandler.updatePlayerBoard(coord, isHit);
    this._UIHandler.announceTurnResult(this.botName, coord, isHit);
  }

  switchTurn() {
    [this.attacker, this.defender] = [this.defender, this.attacker];
  }

  announceGameEnd() {
    const winner = this.attacker === this.player ? this.playerName : this.botName;
    this._UIHandler.announceGameEnd(winner);
  }

  async main() {
    while (!this.isGameEnded) {
      if (this.attacker === this.player) {
        await this.playPlayerTurn();
      } else {
        this.playBotTurn();
      }

      if (this.defender.isAllSunk()) {
        this.isGameEnded = true;
      } else {
        this.switchTurn();
      }
    }
  
    this.announceGameEnd();
  }
}