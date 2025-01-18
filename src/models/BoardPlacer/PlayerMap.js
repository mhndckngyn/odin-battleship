import randomIntegerInclusive from "../../modules/randomNumber";

export default class PlayerMap {
  constructor(shipsLength) {
    this.map = {};
    this.placeShipsRandomly(shipsLength);
  }

  placeShipsRandomly(shipsLength) {
    shipsLength.forEach((length, id) => {
      let x;
      let y;
      let placeVertically;
      while (true) {
        placeVertically = Math.random() < 0.5;
        x = randomIntegerInclusive(0, 9);
        y = randomIntegerInclusive(0, 9);

        if (
          this.isInsideBoard(length, placeVertically, { x, y }) &&
          !this.isCollided(id, length, placeVertically, { x, y })
        ) {
          break;
        }
      }
      this.map[id] = {
        length,
        coordinate: { x, y },
        placeVertically,
      };
    });
  }

  getShips() {
    return Object.values(this.map);
  }

  getShip(id) {
    return this.map[id];
  }

  getShipIds() {
    return Object.keys(this.map);
  }

  updateVertical(id) {
    this.map[id].placeVertically = !this.map[id].placeVertically;
  }

  updateCoordinate(id, coordinate) {
    const { x, y } = coordinate;
    this.map[id].coordinate.x = x;
    this.map[id].coordinate.y = y;
  }

  getOccupiedTiles(length, placeVertically, coordinate) {
    const { x, y } = coordinate;
    const tiles = [];
    if (placeVertically) {
      for (let i = 0; i < length; i++) {
        tiles.push({ x, y: y + i });
      }
    } else {
      for (let i = 0; i < length; i++) {
        tiles.push({ x: x + i, y });
      }
    }

    return tiles.map((tile) => tile.y * 10 + Number(tile.x));
  }

  isInsideBoard(length, placeVertically, coordinate) {
    const { x, y } = coordinate;
    return placeVertically
      ? Number(y) + length <= 10
      : Number(x) + length <= 10;
  }

  isCollided(id, length, placeVertically, coordinate) {
    // get tiles occupied by other ships
    const occupiedTiles = this.getShipIds()
      .filter((shipId) => shipId !== id)
      .flatMap((shipId) => {
        const currentShip = this.getShip(shipId);
        return this.getOccupiedTiles(
          currentShip.length,
          currentShip.placeVertically,
          currentShip.coordinate,
        );
      });

    // create a set from occupied tiles (can be omitted)
    const occupiedSet = new Set(occupiedTiles);
    // check validity of new placement
    const newPlacementTiles = this.getOccupiedTiles(
      length,
      placeVertically,
      coordinate,
    );
    for (const tile of newPlacementTiles) {
      if (occupiedSet.has(tile)) {
        return true;
      }
    }

    return false;
  }

  isPlaceable(id, newCoordinate) {
    const ship = this.getShip(id);
    return (
      this.isInsideBoard(ship.length, ship.placeVertically, newCoordinate) &&
      !this.isCollided(id, ship.length, ship.placeVertically, newCoordinate)
    );
  }

  isTurnable(id) {
    const ship = this.getShip(id);
    return (
      this.isInsideBoard(ship.length, !ship.placeVertically, ship.coordinate) &&
      !this.isCollided(id, ship.length, !ship.placeVertically, ship.coordinate)
    );
  }
}
