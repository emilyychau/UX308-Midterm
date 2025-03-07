//q4 calculate total cost of a gym membership, discounted according to the number of friends they sign up

function gymDiscount (fCost, iFriends, fDiscount){
    let fDiscount = 0;
    if (fCost <= 0) {
        console.log("The starting gym membership must cost more than $0.00.");
    }
    if (iFriends < 0) {
        console.log("Your number of friends referred cannot be negative.");
    }
    if (iFriends === 1) {
        fDiscount = 0.95;
    }
    else if (iFriends === 2) {
        fDiscount = 0.90;
    }
    else if (iFriends === 3) {
        fDiscount = 0.85;
        console.log("Your friends discount is capped at 15% for referrals to 3 or more friends.")
    }
    let fTotal = fCost * fDiscount;
    return fTotal;

}

export {gymDiscount}