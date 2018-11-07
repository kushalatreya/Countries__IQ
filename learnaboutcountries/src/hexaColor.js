//this is the function to generate random hexa number, which will be used to generate color.

function randomHexaNumberGenerator(num) {
    let result = "#";
    for (let i = 0; i < 6; i++) {
        result += Math.floor(Math.random() * 16).toString(16);
    }
    return result;
}