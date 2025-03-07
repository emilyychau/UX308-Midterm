import {richter2damagelvl} from "../richter.js";

describe("testing earthquake intensity", function(){
    it ("tests 0", function(){
        let fIntensity = 0;
        let sResult = richter2damagelvl(fIntensity)
        expect(sResult).toBe("Little or no damage");
    });
    it ("tests 6", function(){
        let fIntensity = 6;
        let sResult = richter2damagelvl(fIntensity)
        expect(sResult).toBe("Serious damage: walls may crack or fall");
    });
    it ("tests 7", function(){
        let fIntensity = 7;
        let sResult = richter2damagelvl(fIntensity)
        expect(sResult).toBe("Disaster: buildings may collapse");
    });
    it ("tests 8", function(){
        let fIntensity = 8;
        let sResult = richter2damagelvl(fIntensity)
        expect(sResult).toBe("Catastrophe: most buildings destroyed");
    });

})