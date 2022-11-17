var idRandom=0;

function criarMsg(){
    const elem = document.createElement('p');
    elem.textContent = "Oi turma! Fui criado pelo seu clique.";

    document.body.appendChild(elem);

}

// function getCount(){
//     return ++count;
// }



function getRandom(n){
    return parseInt(Math.random() * n)+1
}
function criarBoxes(){
    const qtdMax = parseInt(document.querySelector("#iptMax").value);
    const bttCriarBox = document.querySelector("#bttCriarBox");
    
    for(let i=1; i<=qtdMax; i++){
        const elem = document.createElement('div');
        // var ct = getCount();
        elem.setAttribute('class', 'box');
        elem.setAttribute('id',i);
        elem.addEventListener("click",function(){
            if(this.id == idRandom){
                alert('Parabéns');
            } 
        });
        elem.textContent = i;
        document.body.appendChild(elem);
    }

    idRandom = getRandom(qtdMax)
    bttCriarBox.disabled = true;
    // if (count==qtdMax){
    //     bttCriarBox.disabled = true;
    // }
}

function removerBox(){
    const idElemRem = parseInt(document.querySelector("#iptRem").value);
    const elem = document.getElementById(idElemRem);
    elem.remove();
}