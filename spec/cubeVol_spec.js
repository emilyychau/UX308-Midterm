import {height2vol} from "../height2volume.js";

describe("testing height2volume.js", function(){
    it ("tests a height a 5m", function(){
        let height = 5;
        let volume = height2vol(height);
        expect(volume.toFixed(2)).toBe("125.00");
    });
    it ("tests a height a 1m", function(){
        let height = 1;
        let volume = height2vol(height);
        expect(volume.toFixed(2)).toBe("1.00");
    });
    it ("tests a height a 7m", function(){
        let height = 7;
        let volume = height2vol(height);
        expect(volume.toFixed(2)).toBe("343.00");
    });
    it ("tests a height a 0m", function(){
        let height = 0;
        let volume = height2vol(height);
        expect(volume.toFixed(2)).toBe("0.00");
    });
    it ("tests a negative height ", function(){
        let height = -5;
        let volume = height2vol(height);
        expect(volume).toBe("The height of the cube cannot be negative");
    });

})