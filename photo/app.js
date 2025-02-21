const { homedir } = require('os');
const fs = require('fs');
const path = require('path');

console.log(process.argv);
const folder = process.argv[2];
const workingDir = path.join(homedir(),'Pictures',folder);

if(!folder||!fs.existsSync(workingDir)){
    console.log('pleas enter folerName');
}

console.log(workingDir);