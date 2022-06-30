const fs = require("fs");

fs.mkdir('./unter', () => {
    fs.writeFile('./unter/datei.txt', "inhalt", () => { })
})

function funPara(content) {
    if (!"./unter/new.txt") {
        return fs.writeFile('./unter/new.txt', content, () => { })
    } else if ("./unter/new.txt") {
        return fs.appendFileSync('./unter/new.txt', content, () => {

        })

    }
}
funPara('servus ');