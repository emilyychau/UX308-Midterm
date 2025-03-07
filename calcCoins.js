//q1 Calculate the total value of a set of coins in dollars

function calcCoins(nickel, dime, quarter, loonie, toonie){
    let total = (nickel * 0.05) + (dime * 0.10) + (quarter * 0.25) + (loonie * 1.00) + (toonie * 2.00);
    return total;
}

export {calcCoins}