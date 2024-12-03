import PubSub from "../../modules/pubSub";
import {
  psBoardChanged,
  psGameEnded,
  psHumanPlayTurn,
  psToHumanTurn,
} from "../../Settings/pubSubEvents";
import BotPlayer from "../BotPlayer";
import Player from "../Player";

export default class GameController {
  constructor() {
    this.humanPlayer = new Player();
    this.botPlayer = new BotPlayer();
    [this.attackingPlayer, this.defendingPlayer] = [
      this.humanPlayer,
      this.botPlayer,
    ];

    PubSub.subscribe(psHumanPlayTurn, this.humanPlayTurn.bind(this));
    this.publishBoardsChanged();
  }

  publishBoardsChanged() {
    PubSub.publish(psBoardChanged, {
      humanBoard: this.humanPlayer.getBoard(),
      botBoard: this.botPlayer.getBoard(),
    });
  }

  humanPlayTurn(coord) {
    if (this.attackingPlayer !== this.humanPlayer) {
      return;
    }

    this.botPlayer.receiveAttack(coord);
    this.finishTurn();
  }

  botPlayTurn() {
    const coord = this.botPlayer.playTurn();
    this.humanPlayer.receiveAttack(coord);
    this.finishTurn();
  }

  switchPlayerTurn() {
    [this.attackingPlayer, this.defendingPlayer] = [
      this.defendingPlayer,
      this.attackingPlayer,
    ];
  }

  finishTurn() {
    this.publishBoardsChanged();

    if (this.defendingPlayer.isAllSunk()) {
      PubSub.publish(psGameEnded);
      return;
    }

    this.switchPlayerTurn();
    if (this.attackingPlayer === this.humanPlayer) {
      PubSub.publish(psToHumanTurn);
    } else {
      this.botPlayTurn();
    }
  }
}
