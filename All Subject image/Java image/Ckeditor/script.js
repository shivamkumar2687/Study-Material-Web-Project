function addindatabase() {
    var a = document.getElementById("submitfile").value;
    var fs = require('fs');
    fs.writeFile('new_file.txt', a , function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}