//q3 converts the height of a cube  in meters to the volume of the cube in cubic meters

function height2vol(height){
    let posHeight = Math.abs(height);
    let volume = posHeight ** 3;
    return volume;
}

export {height2vol}