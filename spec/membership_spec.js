import { gymDiscount } from "../membership.js";

describe("testing friend discounts", function(){
    it("tests discount with no friends", function(){
        let iFriends = 1; 
        let fCost = 0;
        let fTotal = gymDiscount(fCost, iFriends);
        expect(fTotal).toBe("The cost of the initial gym membership cannot be $0 or less");
    });
    it("tests discount with no friends", function(){
        let iFriends = 0; 
        let fCost = 50;
        let fTotal = gymDiscount(fCost, iFriends);
        expect(fTotal.toFixed(2)).toBe("50.00");
    });
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