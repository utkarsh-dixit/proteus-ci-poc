let fs = require("fs");

const data = fs.readFileSync("./lib/web/package.json");

const packageJSON = JSON.parse(data);

if(packageJSON.hasOwnProperty("private")){
    packageJSON.private = false;
    packageJSON.name = "@utkarsh-dixit/headout-components";
}
fs.writeFileSync("./lib/web/package.json", JSON.stringify(packageJSON));