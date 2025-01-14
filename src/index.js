import BoardPlacer from "./models/BoardPlacer/BoardPlacer";
import GameController from "./models/GameController";
import UIHandler from "./models/UIHandler";
import createElement from "./modules/createElement";
import "./styles.css";

const startButton = document.getElementById("start");
const boardArea = document.getElementById("board-area");
const announcer = document.getElementById("announcer");
const buttonArea = document.getElementById("button-area");

async function setBoard() {
  const boardPlacer = new BoardPlacer();
  const [board, finishPlacingButton] = boardPlacer.getUI();

  // set up buttons and labels
  startButton.classList.add("hidden");
  boardArea.replaceChildren(board);
  buttonArea.appendChild(finishPlacingButton);
  const announcers = [
    createElement("p", {
      text: "Click to rotate ships, drag to move them around.",
    }),
  ];
  announcer.replaceChildren(...announcers);

  // wait until user finishes placing
  const playerMap = await boardPlacer.waitUserStart();
  finishPlacingButton.remove();
  return playerMap;
}

async function playGame(playerMap) {
  const uiHandler = new UIHandler(playerMap);
  const gameController = new GameController(uiHandler, playerMap);
  boardArea.replaceChildren(...uiHandler.getBoards());
  announcer.replaceChildren(...uiHandler.getAnnouncers());
  await gameController.play();

  // game ended
  startButton.classList.remove("hidden");
  startButton.textContent = "Play again";
}

async function startHandler() {
  const playerMap = await setBoard();
  playGame(playerMap);
}

startButton.addEventListener("click", startHandler);
