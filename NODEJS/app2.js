const prompt = require('prompt-sync')();

let a = parseInt(prompt('Digite o primeiro número:'));
let b = parseInt(prompt('Digite o segundo número:'));

const LEN = b-a-1;
const numbers = new Array(LEN);

console.log("Laço For:");
for(let i=a+1;i<b;i++){
    numbers[i] = i
    console.log(i);
}
console.log("Laço While:");
let i = a+1;
while(i<b){
    console.log(i);
    i++;
}
console.log("Laço Do/While:");
i = a+1;
do{
    console.log(i);
    i++;
}while(i<b);

console.log(`Valores Intermediários:${numbers.join(' ')}`)