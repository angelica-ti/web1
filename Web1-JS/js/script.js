function mostrar(name){
    var span_element = document.querySelector('#msg');
    span_element.innerHTML = "Olá, seu nome é "+name.value;

}
function limpar(){
    var span_element = document.querySelector('#msg');
    span_element.innerHTML = "";
}

function calcular(){
    var x = parseInt(document.querySelector('#fx').value);
    var y = parseInt(document.querySelector('#fy').value);
    var result = document.querySelector('#result');

    var radios = document.getElementsByName('function');
    for(i=0;i<radios.length;i++){
        if(radios[i].checked){
            break;
        }
    }
    switch(radios[i].value){
        case '1':
            result.innerHTML = x + y;
            break;
        case '2':
            result.innerHTML = x - y;
            break;
        case '3':
            result.innerHTML = x * y;
            break;
        default:
            result.innerHTML = x / y;
        
    }
}