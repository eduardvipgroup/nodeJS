require('./app/main');
const ansi = require('ansi');
const study = 'I study Node.js';
const top = ansi(process.stdout);
top.beep();
console.log(study);

