import{fahrenheit2celsius} from "../convertFtoC.js";

describe("testing fahrenheit2celsius", function(){
    it("tests 212 Fº conversion", function(){
        let fahrenheit = 212;
        let celsius = fahrenheit2celsius(fahrenheit);
        expect(celsius.toFixed(2)).toBe("100.00");
    });
    it("tests 32 Fº conversion", function(){
        let fahrenheit = 32;
        let celsius = fahrenheit2celsius(fahrenheit);
        expect(celsius.toFixed(2)).toBe("0.00");
    });
    it("tests 71 Fº", function(){
        let fahrenheit = 71;
        let celsius = fahrenheit2celsius(fahrenheit);
        expect(celsius.toFixed(2)).toBe("21.67");
    });
})