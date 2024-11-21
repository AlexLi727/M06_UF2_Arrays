let llista_numeros = new Array(5);
for(i = 0; i < llista_numeros.length; i++){
    llista_numeros[i] = Math.floor((Math.random() * 10) + 1);
}
console.log(llista_numeros);
document.getElementById("llista_numeros").innerHTML = llista_numeros;

let llista_bidimensional = new Array(2);
for(i = 0; i < llista_bidimensional.length; i++){
    var array = new Array();
    for(y = 0; y < 5; y++){
        array.push(Math.floor((Math.random() * 10) + 1));
    }
    llista_bidimensional[i] = array;
}
console.log(llista_bidimensional);

document.getElementById("llista_bidimensional1").innerHTML = llista_bidimensional[0];
document.getElementById("llista_bidimensional2").innerHTML = llista_bidimensional[1];

function mostrarResultados(){
    document.getElementById("resultats").innerHTML = 
    llista_numeros.shift() + ` i ` + llista_numeros.pop() + `; `
    + llista_bidimensional[0].shift() + ` i ` + llista_bidimensional[0].pop() + `; ` 
    + llista_bidimensional[1].shift() + ` i ` + llista_bidimensional[1].pop();
}

document.getElementById("MostrarNumeros").addEventListener("click", mostrarResultados());

