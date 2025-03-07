//q5 determine damage level given earthquake intensity measured on the Richter scale

function richter2damagelvl (fIntensity){
    let sResult;
    if (fIntensity <= -1){
        sResult = "Possible error reading, no Richter Scale intensity detected.";
    }
    else if (fIntensity >= 0 && fIntensity <= 5){
        sResult = "Little or no damage";
    }
    else if (fIntensity >= 5.01 && fIntensity <= 5.5){
        sResult = "Some damage";
    }
    else if (fIntensity >= 5.51 && fIntensity <= 6.5){
        sResult = "Serious damage: walls may crack or fall";
    }
    else if (fIntensity >= 6.51 && fIntensity <= 7.49){
        sResult = "Disaster: buildings may collapse";
    }
    else if (fIntensity >= 7.5){
        sResult = "Catastrophe: most buildings destroyed";
    }
return sResult;
}
export {richter2damagelvl}