import "./styles.css";
import GameController from "./models/GameController";
import ScreenController from "./models/ScreenController";

let gameController;
let screenController;

window.addEventListener("load", () => {
  screenController = ScreenController;
  gameController = new GameController();
});
