let LEN = 3;
const vector = new Array(LEN);
const prompt = require('prompt-sync')();

var i = 1;

while(i<=LEN){
    vector[i] = prompt(`Digite o ${i}° número:`);
    i++;
}

console.log(vector.join(' '));