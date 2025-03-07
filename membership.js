//q4 calculate total cost of a gym membership, discounted according to the number of friends they sign up

function gymDiscount (fCost, iFriends){
    let fTotal;
    if (fCost <= 0){
        return "The cost of the initial gym membership cannot be $0 or less";
    }
    if (iFriends <= -1){
        return "Your number of friends referred cannot be less than 1";
    }
    else if (iFriends === 0){
        fTotal = fCost;
    }
    else if (iFriends === 1) {
        fTotal = 0.95 * fCost;
    }
    else if (iFriends === 2) {
        fTotal = 0.90 * fCost;
    }
    else if (iFriends >= 3) {
        fTotal = 0.85 * fCost;
    }
return fTotal;

}

export {gymDiscount}