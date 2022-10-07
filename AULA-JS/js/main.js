function changeBackground(){
    var body = document.querySelector("body");
    body.style.backgroundColor = "green";
}

function aumentateFont(){
    var paragraph = document.querySelector("p");
    var button = document.querySelector("input");
    
    if (paragraph.style.fontSize == "100%") {
        paragraph.style.fontSize = "200%";
        button.value = "Diminuir Fonte";
    
    } 
    else{
        paragraph.style.fontSize = "100%";
        button.value = "Aumentar Fonte";
    }
}