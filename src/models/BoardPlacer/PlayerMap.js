export default class PlayerMap {
  constructor(shipsLength) {
    this.map = {};
    shipsLength.forEach((length, i) => {
      this.map[i] = {
        length,
        coordinate: {
          x: 0,
          y: i,
        },
        placeVertically: false,
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

  getOccupyingTilesAsNumbers(length, placeVertically, coordinate) {
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

  isCollided(id, placeVertically, coordinate) {
    // get tiles occupied by other ships
    const occupiedTiles = this.getShipIds()
      .filter((shipId) => shipId !== id)
      .flatMap((shipId) => {
        const currentShip = this.getShip(shipId);
        return this.getOccupyingTilesAsNumbers(
          currentShip.length,
          currentShip.placeVertically,
          currentShip.coordinate,
        );
      });

    // create a set from occupied tiles (might not be necessary)
    const set = new Set(occupiedTiles);

    const ship = this.getShip(id);
    // check validity of new placement
    for (const tile of this.getOccupyingTilesAsNumbers(
      ship.length,
      placeVertically,
      coordinate,
    )) {
      if (set.has(tile)) {
        return true;
      }
    }

    return false;
  }

  isPlaceable(id, newCoordinate) {
    const ship = this.getShip(id);
    return (
      this.isInsideBoard(ship.length, ship.placeVertically, newCoordinate) &&
      !this.isCollided(id, ship.placeVertically, newCoordinate)
    );
  }

  isTurnable(id) {
    const ship = this.getShip(id);
    return (
      this.isInsideBoard(ship.length, !ship.placeVertically, ship.coordinate) &&
      !this.isCollided(id, !ship.placeVertically, ship.coordinate)
    );
  }
}
