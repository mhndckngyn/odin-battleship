import TILE_STATE from "../../settings/tileState";
import Ship from "../Ship";
import Gameboard from "./Gameboard";

let gameboard;

beforeEach(() => {
  gameboard = new Gameboard();
});

test("the Gameboard class exists", () => {
  expect(gameboard).toBeTruthy();
});

describe("`place` method", () => {
  let ship1;
  let ship2;
  const coordinate = { x: 0, y: 0 };
  const placeVertically = true;

  beforeEach(() => {
    const length = 2;
    ship1 = new Ship(length);
    ship2 = new Ship(length);
  });

  test("placing a ship at a valid coordinate should return true and place the ship on that tile accordingly", () => {
    const placeFirstShip = gameboard.place(ship1, coordinate, placeVertically);
    expect(placeFirstShip).toEqual(true);
    expect(gameboard.board[0]).toBe(ship1);
    expect(gameboard.board[10]).toBe(ship1);
  });

  test("placing 2 ships non-overlapping should return true", () => {
    gameboard.place(ship1, coordinate, placeVertically);
    const placeSecondShip = gameboard.place(
      ship2,
      { x: 1, y: 0 },
      placeVertically,
    );
    expect(placeSecondShip).toEqual(true);
  });

  test("placing a ship on top of another should return false (1)", () => {
    gameboard.place(ship1, coordinate, !placeVertically);
    const placeSecondShip = gameboard.place(
      ship2,
      coordinate,
      placeVertically,
    );
    expect(placeSecondShip).toEqual(false);
  });

  test("placing a ship on top of another should return false (2)", () => {
    gameboard.place(ship1, coordinate, placeVertically);
    const placeSecondShip = gameboard.place(
      ship2,
      coordinate,
      placeVertically,
    );
    expect(placeSecondShip).toEqual(false);
  });

  test("placing a ship on 2 rows should return false", () => {
    const placeShip = gameboard.place(ship1, { x: 9, y: 0 }, false);
    expect(placeShip).toEqual(false);
  });

  test("placing a ship on 2 columns should return false", () => {
    const placeShip = gameboard.place(ship1, { x: 0, y: 9 }, true);
    expect(placeShip).toEqual(false);
  });
});

describe("`receiveAttack` method", () => {
  let ship;
  const length = 2;
  const coordinate = { x: 0, y: 0 };
  const placeVertically = true;

  beforeEach(() => {
    ship = new Ship(length);
    gameboard.place(ship, coordinate, placeVertically);
  });

  test("if the attack hits a ship, it should return true (1)", () => {
    const launchAttack = gameboard.receiveAttack({ x: 0, y: 0 });
    expect(launchAttack).toEqual(true);
  });

  test("if the attack hits a ship, it should return true (2)", () => {
    const launchAttack = gameboard.receiveAttack({ x: 0, y: 1 });
    expect(launchAttack).toEqual(true);
  });
  
  test("if the attack misses, it should mark the tile as missed", () => {
    gameboard.receiveAttack({ x: 1, y: 0 });
    expect(gameboard.board[1]).toEqual(TILE_STATE.MISSED);
  });

  test("if the attack hits, it should mark the tile as hit and should increase the number of hits the ship has taken", () => {
    gameboard.receiveAttack({ x: 0, y: 0 });
    expect(ship.hits).toEqual(1);
    expect(gameboard.board[0]).toEqual(TILE_STATE.HIT);
  });
});

describe("test public methods altogether", () => {
  test("one ship", () => {
    const length = 2;
    const ship = new Ship(length);

    const coordinate = { x: 0, y: 0 };
    const placeVertically = true;

    gameboard.place(ship, coordinate, placeVertically);

    const attackAt = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
    ];

    expect(gameboard.isAllSunk()).toBe(false);

    let i = 0;
    for (; i < attackAt.length; i++) {
      if (gameboard.isAllSunk()) {
        break;
      }
      const coordinate = attackAt[i];
      gameboard.receiveAttack(coordinate);
    }

    expect(gameboard.isAllSunk()).toBe(true);
    expect(i).toEqual(attackAt.length);
  });

  test("two ships, with missing shots", () => {
    const length1 = 3;
    const length2 = 2;
    const ship1 = new Ship(length1);
    const ship2 = new Ship(length2);

    const coordinate1 = { x: 0, y: 0 };
    const coordinate2 = { x: 1, y: 3 };
    const placeVertically = true;

    const attackAt = [
      { x: 0, y: 0 }, // hits ship1
      { x: 1, y: 1 }, // misses
      { x: 1, y: 3 }, // hits ship2
      { x: 1, y: 2 }, // misses
      { x: 0, y: 1 }, // hits ship1
      { x: 0, y: 2 }, // hits ship1
      { x: 2, y: 2 }, // misses
      { x: 2, y: 3 }, // hits ship2
    ];

    gameboard.place(ship1, coordinate1, placeVertically);
    gameboard.place(ship2, coordinate2, !placeVertically);

    expect(gameboard.isAllSunk()).toBe(false);

    let i = 0;
    for (; i < attackAt.length; i++) {
      if (gameboard.isAllSunk()) {
        break;
      }
      const coordinate = attackAt[i];
      gameboard.receiveAttack(coordinate);
    }

    expect(gameboard.isAllSunk()).toEqual(true);
    expect(i).toEqual(attackAt.length);
  });
});
