import Gameboard from "../Gameboard";
import Player from "./Player";

test("the Player class exists", () => {
  const player = new Player();
  expect(player).toBeTruthy();
})

test("Player object should contain a gameboard object", () => {
  const gameboard = new Gameboard();
  const player = new Player(gameboard);
  expect(player.gameboard).toBeTruthy();
})