import Gameboard from "../Gameboard";
import Player from "./Player";

test("the Player class exists", () => {
  const player = new Player();
  expect(player).toBeTruthy();
})

test("Player object should contain a gameboard object", () => {
  const player = new Player();
  expect(player.gameboard).toBeTruthy();
})