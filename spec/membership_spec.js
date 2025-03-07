import { gymDiscount } from "../membership.js";

describe("testing friend discounts", function(){
    it("tests discount with 1 friend", function(){
        let iFriends = 1; 
        let fCost = 100;
        let fTotal = gymDiscount(fCost, iFriends);
        expect(fTotal.toFixed(2)).toBe("95.00");
    });
    it("tests discount with 2 friends", function(){
        let iFriends = 2; 
        let fCost = 100;
        let fTotal = gymDiscount(fCost, iFriends);
        expect(fTotal.toFixed(2)).toBe("90.00");
    });
    it("tests discount with 3 friends", function(){
        let iFriends = 3; 
        let fCost = 100;
        let fTotal = gymDiscount(fCost, iFriends);
        expect(fTotal.toFixed(2)).toBe("85.00");
    });
    it("tests discount with 4 friends", function(){
        let iFriends = 4; 
        let fCost = 100;
        let fTotal = gymDiscount(fCost, iFriends);
        expect(fTotal.toFixed(2)).toBe("85.00");
    });
})