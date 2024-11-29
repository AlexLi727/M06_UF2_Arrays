//Declaro el array con números aleatorios
let llista_numeros = new Array(5);
for(i = 0; i < llista_numeros.length; i++){
    llista_numeros[i] = Math.floor((Math.random() * 10) + 1);
}

//Devuelvo el valor de los arrays en diferentes divs, hago una función para poder reutilizar código
console.log(llista_numeros);
function actualizarArray1(){
    document.getElementById("llista_numeros").innerHTML = "";
    for(i = 0; i < llista_numeros.length; i++){
        document.getElementById("llista_numeros").innerHTML += `<div class = numero>`+llista_numeros[i]+`</div> `;
    }
}
actualizarArray1();

//Declaro un array de dos posiciones que contenga dentro otro array con números aleatorios
let llista_bidimensional = new Array(2);
for(i = 0; i < llista_bidimensional.length; i++){
    var array = new Array();
    for(y = 0; y < 5; y++){
        array.push(Math.floor((Math.random() * 10) + 1));
    }
    llista_bidimensional[i] = array;
}
console.log(llista_bidimensional);

//Devuelvo el valor de cada array en diferentes divs, hago una función para poder reutilizar código
function actualizarArray2(){
    document.getElementById("llista_bidimensional1").innerHTML = "";
    document.getElementById("llista_bidimensional2").innerHTML = "";
    for(y = 0; y < llista_bidimensional[0].length; y++){
        document.getElementById("llista_bidimensional1").innerHTML += `<div>`+llista_bidimensional[0][y]+`</div> `;
    }
    for(y = 0; y < llista_bidimensional[1].length; y++){
        document.getElementById("llista_bidimensional2").innerHTML += `<div>`+llista_bidimensional[1][y]+`</div> `;
    }
}
actualizarArray2();

//Función que muestra el primer y último valor de cada array, se reutilizará en culquier actualización de los arrays
function mostrarResultados(){
    document.getElementById("resultats").innerHTML = 
    llista_numeros[0] + ` i ` + llista_numeros[llista_numeros.length - 1] + `; `
    + llista_bidimensional[0][0] + ` i ` + llista_bidimensional[0][llista_bidimensional[0].length - 1] + `; ` 
    + llista_bidimensional[1][0] + ` i ` + llista_bidimensional[1][llista_bidimensional[1].length -1];
}
document.getElementById("MostrarNumeros").addEventListener("click", mostrarResultados);

//Evento al hacer click en borrar
//Elimina el último valor de cada array y actualiza los resultados
document.getElementById("Borrar").addEventListener("click", function(){
    llista_numeros.pop();
    llista_bidimensional[0].pop();
    llista_bidimensional[1].pop();
    mostrarResultados();
    actualizarArray2();
    actualizarArray1();
});

document.getElementById("añadir").addEventListener("click", function(){
    let num1 = Math.floor((Math.random() * 10) + 1);
    let num2 = Math.floor((Math.random() * 10) + 1);
    let num3 = Math.floor((Math.random() * 10) + 1);

    llista_numeros.push(num1);
    llista_bidimensional[0].push(num2);
    llista_bidimensional[1].push(num3);
    mostrarResultados();
    actualizarArray1();
    actualizarArray2();
});

document.getElementById("llista_numeros").addEventListener("click", function(){
    event.target.style.backgroundColor = "blue";
});


