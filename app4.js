// check the fileName extension of the fileName if it is .js or not , 

function checkfileNameExtension(fileName) {
    const length = fileName.length;
    if (fileName[length - 1] === 's' && fileName[length - 2] === 'j' && fileName[length - 3] === '.') {
        return true;
    }
    return false;
}

console.log(checkfileNameExtension('app.js'));