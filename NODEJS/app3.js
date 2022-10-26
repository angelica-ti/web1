let LEN = 3;
const vector = new Array(LEN);
const prompt = require('prompt-sync')();

var i = 0;

while(i<LEN){
    vector[i] = parseInt(prompt(`Digite o ${i+1}° número:`));
    i++;
}

var soma = 0;
for(let i=0;i<vector.length;i++){
    soma += vector[i];
}

// console.log(vector.join(' '));
console.log(`Soma: ${soma}`)
