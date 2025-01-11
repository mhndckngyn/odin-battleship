import Bot from "../Bot";
import Player from "../Player";

export default class GameController {
  playerName = "Player";
  botName = "Bot";

  constructor(UIHandler, playerMap) {
    this._UIHandler = UIHandler;
    
    this.player = new Player();
    this.player.setUpBoard(playerMap);
    this.attacker = this.player;

    this.bot = new Bot();
    this.defender = this.bot;
    
    this.isGameEnded = false;
  }

  async requestPlayerMove() {
    const coordinate = await this._UIHandler.requestPlayerMove();
    return coordinate;
  }
  
  async playPlayerTurn() {
    const coordinate = await this.requestPlayerMove();
    const isHit = this.bot.receiveAttack(coordinate);
    this._UIHandler.updateBotBoard(coordinate, isHit);
    this._UIHandler.announceTurnResult(this.playerName, coordinate, isHit);
  }

  playBotTurn() {
    const coordinate = this.bot.selectNextTile();
    const isHit = this.player.receiveAttack(coordinate);
    this._UIHandler.updatePlayerBoard(coordinate, isHit);
    this._UIHandler.announceTurnResult(this.botName, coordinate, isHit);
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