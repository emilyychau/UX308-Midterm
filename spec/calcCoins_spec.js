import {calcCoins} from "../calcCoins.js";

describe("test calcCoins", function(){
    it("tests no coins", function(){
        let nickel = 0;
        let dime = 0;
        let quarter = 0;
        let loonie = 0;
        let toonie = 0;
        let total = calcCoins(nickel, dime, quarter, loonie, toonie);
        expect(total.toFixed(2)).toBe("0.00");
    });
    it("tests no coins", function(){
        let nickel = 3;
        let dime = 1;
        let quarter = 2;
        let loonie = 0;
        let toonie = 2;
        let total = calcCoins(nickel, dime, quarter, loonie, toonie);
        expect(total.toFixed(2)).toBe("4.75");
    });
    it("tests no coins", function(){
        let nickel = 5;
        let dime = 0;
        let quarter = 3;
        let loonie = 0;
        let toonie = 1;
        let total = calcCoins(nickel, dime, quarter, loonie, toonie);
        expect(total.toFixed(2)).toBe("3.00");
    });
});
