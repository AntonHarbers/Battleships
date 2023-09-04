import { Ship, Gameboard, Player } from "./battleships";

describe("Ship class", () => {
    test("#constructor", () => {
        const ship = new Ship("Carrier", 5);
        expect(ship.name).toBe("Carrier");
        expect(ship.length).toBe(5);
        expect(ship.hits).toBe(0);
        expect(ship.sunk).toBe(false);
    });

    test("#hit", () => {
        const ship = new Ship("Carrier", 5);
        ship.hit();
        expect(ship.hits).toBe(1);
    });

    test("#isSunk", () => {
        const ship = new Ship("Carrier", 5);
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        ship.isSunk();
        expect(ship.sunk).toBe(true);
    });

});