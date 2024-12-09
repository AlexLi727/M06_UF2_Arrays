let Pila1 = []
let Pila2 = []
let Pila3 = []

//Código para empezar la partida, resetendo todos los valores existentes, comprobando el número de piezas introducido y iniciado el array de la pila1
document.getElementById("empezar").addEventListener("click", function(){
    let nDiscos = parseInt(document.getElementById("discos").value);
    document.getElementById("pila1").innerHTML = "";
    document.getElementById("pila2").innerHTML = "";
    document.getElementById("pila3").innerHTML = "";
    if(nDiscos <= 5 && nDiscos > 0){
        for(i = 1; i < nDiscos+1; i++){
            Pila1.push(i);
            document.getElementById("pila1").innerHTML += `<div id = pieza`+i+`>`+i+`</div>`;
            
        }
    }
    console.log(Pila1[0]);
});

//Funcion para mostrar de forma visual las pilas, se ejecuta luego de cada actualización
function updateTower (){
    document.getElementById("pila1").innerHTML = "";
    document.getElementById("pila2").innerHTML = "";
    document.getElementById("pila3").innerHTML = "";

    Pila1.sort();
    Pila2.sort();
    Pila3.sort();

    for(i = 0; i < Pila1.length; i++){
        document.getElementById("pila1").innerHTML += `<div id = pieza`+Pila1[i]+`>`+Pila1[i]+`</div>`;
    }

    for(i = 0; i < Pila2.length; i++){
        document.getElementById("pila2").innerHTML += `<div id = pieza`+Pila2[i]+`>`+Pila2[i]+`</div>`;
    }

    for(i = 0; i < Pila3.length; i++){
        document.getElementById("pila3").innerHTML += `<div id = pieza`+Pila3[i]+`>`+Pila3[i]+`</div>`;
    }

    //En caso de que la pila1 y pila2 no tengan ninguna pieza pero cuando la pila3 si que contenga, mostrará la pantalla de victoria
    if(Pila1.length === 0 && Pila2.length === 0 && Pila3.length != 0){
        document.getElementById("victoria").innerHTML = "<h1> Enhorabuena! Has movido todas las piezas siguiendo las reglas divinas!!! </h1>";
    }
    
}


//Funciones para mover las piezas a otras pilas, valida si la pieza movida es más pequeño que la base de la pila a excepcion de que no este inicializada
document.getElementById("p1_btn1").addEventListener("click", function(){
    if(Pila1[0] < Pila2[0] || Pila2.length === 0){
        Pila2.push(Pila1.shift());
        updateTower();
    };
});

document.getElementById("p1_btn2").addEventListener("click", function(){
    if(Pila1[0] < Pila3[0] || Pila3.length === 0){
        Pila3.push(Pila1.shift());
        updateTower();
    };
});

document.getElementById("p2_btn1").addEventListener("click", function(){
    if(Pila2[0] < Pila1[0] || Pila1.length === 0){
        Pila1.push(Pila2.shift());
        updateTower();
    };
});

document.getElementById("p2_btn2").addEventListener("click", function(){
    if(Pila2[0] < Pila3[0] || Pila3.length === 0){
        Pila3.push(Pila2.shift());
        updateTower();
    };
});

document.getElementById("p3_btn1").addEventListener("click", function(){
    if(Pila3[0] < Pila1[0] || Pila1.length === 0){
        Pila1.push(Pila3.shift());
        updateTower();
    }
});

document.getElementById("p3_btn2").addEventListener("click", function(){
    if(Pila3[0] < Pila2[0] || Pila2.length === 0){
        Pila2.push(Pila3.shift());
        updateTower();
    };
});