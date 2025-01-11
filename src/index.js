import "./styles.css";
import GameController from "./models/GameController";
import UIHandler from "./models/UIHandler";

const startButton = document.getElementById("start");
const boardArea = document.getElementById("board-area");
const announcer = document.getElementById("announcer");

function getPlayerMap() {
  const shipsPlacement = [
    {
      length: 2,
      coord: {
        x: 0,
        y: 0,
      },
      placeVertically: true,
    },
    {
      length: 2,
      coord: {
        x: 1,
        y: 0,
      },
      placeVertically: true,
    },
    {
      length: 3,
      coord: {
        x: 2,
        y: 0,
      },
      placeVertically: true,
    },
    {
      length: 4,
      coord: {
        x: 3,
        y: 0,
      },
      placeVertically: true,
    },
    {
      length: 5,
      coord: {
        x: 4,
        y: 0,
      },
      placeVertically: true,
    },
  ];
  return shipsPlacement;  
}

startButton.addEventListener("click", () => {
  const playerMap = getPlayerMap();
  const uiHandler = new UIHandler();
  const gameController = new GameController(uiHandler, playerMap);
  boardArea.replaceChildren(uiHandler.playerBoard, uiHandler.botBoard);
  announcer.append(...uiHandler.announcers);
  gameController.main();
});
