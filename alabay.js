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



document.getElementById("MostrarNumeros").addEventListener("click", mostrarResultados);

document.getElementById("Borrar").addEventListener("click", function(){
    llista_numeros.pop();
    delete llista_bidimensional[0].pop();
    delete llista_bidimensional[1].pop();
    mostrarResultados();
});


function mostrarResultados(){
    document.getElementById("resultats").innerHTML = 
    llista_numeros[0] + ` i ` + llista_numeros[llista_numeros.length - 1] + `; `
    + llista_bidimensional[0][0] + ` i ` + llista_bidimensional[0][llista_bidimensional[0].length - 1] + `; ` 
    + llista_bidimensional[1][0] + ` i ` + llista_bidimensional[1][llista_bidimensional[1].length -1];
}