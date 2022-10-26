const prompt = require('prompt-sync')();

let a = parseFloat(prompt('Digite o primeiro número:'));
let b = parseFloat(prompt('Digite o segundo número:'));
let op = parseInt(prompt('Escolha:(1) - Somar(2) - Subtrair(3) - Multiplicar(4) - Dividir Entrada: '));
let signal;
let res;

switch(op){
    case 1:
        res = a+b;
        signal = '+';
        break;
    case 2:
        res = a-b;
        signal = '-';
        break;
    case 3:
        res = a*b;
        signal = '*';
        break;
    case 4:
        res = a/b;
        signal = '/';
        break;
    default:
        res = 'Inválido';

}

console.log(`\nResultado de ${a} ${signal} ${b} = ${res}`);