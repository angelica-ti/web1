function mostrar(name){
    var span_element = document.querySelector('#msg');
    span_element.innerHTML = "Olá, seu nome é "+name.value;

}
function limpar(){
    var span_element = document.querySelector('#msg');
    span_element.innerHTML = "";
}

function calcular(){
    const x = parseInt(document.querySelector('#fx').value);
    const y = parseInt(document.querySelector('#fy').value);
    const result = document.querySelector('#result');
    const lblParImpar = document.getElementById('lblParImpar');
    var box = document.getElementById('box');
    var body = document.querySelector('body');

    const radios = document.getElementsByName('function');
    var res, op;
    for(i=0;i<radios.length;i++){
        if(radios[i].checked){
            break;
        }
    }
    switch(radios[i].value){
        case '1':
            res = x + y;
            op = "+";
            break;
        case '2':
            res = x - y;
            op = "-";
            break;
        case '3':
            res = x * y;
            op = "*";
            break;
        default:
            res = x / y;
            op = "/";
        
    }

    result.innerHTML = `O resultado de ${x} ${op} ${y} é: ${res}`;

    if (res%2 == 0){
        lblParImpar.textContent = "Par";
        body.style.backgroundColor = "lightblue";
        box.style.backgroundColor = "lightgreen";
    }
    else{
        lblParImpar.textContent = "Ímpar";
        body.style.backgroundColor = "lightgreen";
        box.style.backgroundColor = "lightblue";
    }
}
