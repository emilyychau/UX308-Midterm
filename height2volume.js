//q3 converts the height of a cube  in meters to the volume of the cube in cubic meters

function height2vol(height){
    if (height <= -1){
        return "The height of the cube cannot be negative";
    }
    else {
        let volume = height ** 3;
        return volume;
    }
}

export {height2vol}