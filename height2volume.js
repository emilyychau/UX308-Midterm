//q3 converts the height of a cube  in meters to the volume of the cube in cubic meters

function height2vol(height){
    if (height <= 0) {
        console.log("The height must be a positive value.");
    }  
    else if (height < 0) {
        console.log("The height must be a positive value. The calculation will continue with the absolute value.");
        posHeight = Math.abs(height);
    }
    else {
        console.log("Please try again.");
    }
    let volume = posHeight ** 3;
    return volume;
}

export {height2vol}