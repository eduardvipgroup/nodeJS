require('./app/main');
const ansi = require('ansi');
const study = 'I study Node.js';
const top = ansi(process.stdout);
top.beep();
console.log(study);

console.log('Игра "Орел и решка". Введи 0 или 1');
let computer;
let getNumber = function () {
    if (Math.random() > 0.5) {
        computer = 1;
    } else {
        computer = 0;
    }
};
getNumber();
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (line) => {
    if(line == computer && line == 1)
{
    console.log(line, "-орел, ты угадал");
    getNumber();
}
else if (line == computer && line == 0) {
    console.log(line, "-решка, ты угадал");
    getNumber();
}else if (line !=0 && line != 1) {
    console.log("введи 0 или 1");
    getNumber();}
else{
        console.log("ты проиграл, компьютер загадал:", computer);
        getNumber();
    }
});


