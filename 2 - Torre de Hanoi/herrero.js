let Pila1 = []
let Pila2 = []
let Pila3 = []
document.getElementById("empezar").addEventListener("click", function(){
    let nDiscos = parseInt(document.getElementById("discos").value);
    for(i = 1; i < nDiscos+1; i++){
        Pila1.push(i);
        document.getElementById("pila1").innerHTML += `<div>`+i+`</div>`;
    }
    
});