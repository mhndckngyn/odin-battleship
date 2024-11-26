import Ship from "./Ship";

test("jest is configured properly", () => {
  expect(1).toBe(1);
});

test("the Ship class exists", () => {
  const ship = new Ship();
  expect(ship).toBeTruthy();
});

test("the `getLength` function", () => {
  const length = 3;
  const ship = new Ship(length);
  expect(ship.getLength()).toBe(length);
})

describe("the `hit` method of the ship", () => {
  let ship;
  const length = 3;

  beforeEach(() => {
    ship = new Ship(length);
  });

  test("the method should be implemented", () => {
    ship.hit();
  });

  test("the method should increase the number of hits the ship has taken", () => {
    const timesHit = 2;
    for (let i = 0; i < timesHit; i++) {
      ship.hit();
    }

    expect(ship.hits).toEqual(timesHit);
  });
});

describe("the `isSunk` method of the ship", () => {
  let ship;
  const length = 3;

  beforeEach(() => {
    ship = new Ship(length);
  });

  test("the method should be implemented and return false initially", () => {
    const isSunk = ship.isSunk();
    expect(isSunk).toBe(false);
  });

  test("the method should return true only when it has been hit enough times", () => {
    let timesHit = 0;
    while (!ship.isSunk()) {
      timesHit += 1;
      ship.hit();
    }

    expect(timesHit).toEqual(length);
  }, 1000);
});
