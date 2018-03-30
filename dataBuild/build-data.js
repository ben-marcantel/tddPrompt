
const { createWriteStream } = require('fs');
const { generatePrograms } = require('./dataBuild/programs');

let programs = generatePrograms();
let programStream = createWriteStream(`./data/programs.json`);
programStream.write(JSON.stringify(programs));

