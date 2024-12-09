let campoMinas = new Array(8);
const casilla = new Array(8);
let nMinas = 10;
let puntuacion = 0;
for(i = 0; i < campoMinas.length; i++){
    campoMinas[i] = new Array(8);
    casilla[i] = new Array(8);
    casilla[i] = document.createElement("div");
    casilla[i].id = `fila`+i;
    casilla[i].classList.add("fila");
    document.getElementById("juego").appendChild(casilla[i]);
    for(y = 0; y < campoMinas[i].length; y++){
        casilla[i][y] = document.createElement('div');
            casilla[i][y].classList.add('casilla');
            casilla[i][y].addEventListener('click', (function(i, y){
                return function(){
                    prueba(i, y)
                }
            })(i, y)
            );
        document.getElementById(`fila`+i).appendChild(casilla[i][y]);
    }
}

for(i = 0; i < nMinas; i++){
    PosicionMinaX = Math.floor(Math.random() * 8);
    PosicionMinaY = Math.floor(Math.random() * 8);

    if((campoMinas[PosicionMinaX].filter(minas => minas === "M").length < 3) && (campoMinas[PosicionMinaX][PosicionMinaY] !== "M")){
        campoMinas[PosicionMinaX][PosicionMinaY] = "M";
    }else{
        i--;
    }
}

let minasCasilla = 0;
for(i = 0; i < campoMinas.length; i++){
    for(y = 0; y < campoMinas[i].length; y++){
        if(campoMinas[i][y] != "M"){
            if(buscarLimite(i-1, y+1) && campoMinas[i-1][y+1] === "M"){
                minasCasilla++
            };
            if(buscarLimite(i-1, y) && campoMinas[i-1][y] === "M"){
                minasCasilla++
            };
            if(buscarLimite(i-1, y-1) && campoMinas[i-1][y-1] === "M"){
                minasCasilla++
            };
            if(buscarLimite(i, y+1) && campoMinas[i][y+1] === "M"){
                minasCasilla++
            };
            if(buscarLimite(i, y-1) && campoMinas[i][y-1] === "M"){
                minasCasilla++
            };
            if(buscarLimite(i+1, y+1) && campoMinas[i+1][y+1] === "M"){
                minasCasilla++
            };
            if(buscarLimite(i+1, y) && campoMinas[i+1][y] === "M"){
                minasCasilla++
            };
            if(buscarLimite(i+1, y-1) && campoMinas[i+1][y-1] === "M"){
                minasCasilla++
            };
            campoMinas[i][y] = minasCasilla;
            minasCasilla = 0;
        }
    }
}

function prueba(x, y){
    console.log("xd")

    if(campoMinas[x][y] == "M"){
        alert("has perdido");
        for(i = 0; i < campoMinas.length; i++){
            for(y = 0; y < campoMinas[0].length; y++){
                casilla[i][y].textContent = campoMinas[i][y];
                darClase(i, y)
            }
        }

    }else if(campoMinas[x][y] == 0){
        vaciar(x, y);
        
    }else{
        casilla[x][y].textContent = campoMinas[x][y];
        darClase(x, y)
    }
}

function vaciar(x, y){

    casilla[x][y].textContent = campoMinas[x][y];
    if(buscarLimite(x-1, y+1) && campoMinas[x-1][y+1] > 0){
        casilla[x-1][y+1].textContent = campoMinas[x-1][y+1];
        darClase(x-1, y+1);
    }else if(buscarLimite(x-1, y+1) && campoMinas[x-1][y+1] == 0 && casilla[x-1][y+1].textContent == ""){
        casilla[x-1][y+1].textContent = campoMinas[x-1][y+1];
        
        vaciar(x-1, y+1);
    }

    if(buscarLimite(x-1, y) && campoMinas[x-1][y] > 0){
        casilla[x-1][y].textContent = campoMinas[x-1][y];
        darClase(x-1, y);
    }else if(buscarLimite(x-1, y) && campoMinas[x-1][y] == 0 && casilla[x-1][y].textContent == ""){
        casilla[x-1][y].textContent = campoMinas[x-1][y];
        
        vaciar(x-1, y);
    }

    if(buscarLimite(x-1, y-1) && campoMinas[x-1][y-1] > 0){
        casilla[x-1][y-1].textContent = campoMinas[x-1][y-1];
        darClase(x-1, y-1);
    }else if(buscarLimite(x-1, y-1) && campoMinas[x-1][y-1] == 0 && casilla[x-1][y-1].textContent == ""){
        casilla[x-1][y-1].textContent = campoMinas[x-1][y-1];
        
        vaciar(x-1, y-1);
    }

    if(buscarLimite(x, y+1) && campoMinas[x][y+1] > 0){
        casilla[x][y+1].textContent = campoMinas[x][y+1];
        darClase(x, y+1);
    }else if(buscarLimite(x, y+1) && campoMinas[x][y+1] == 0 && casilla[x][y+1].textContent == ""){
        casilla[x][y+1].textContent = campoMinas[x][y+1];
        
        vaciar(x, y+1);
    }

    if(buscarLimite(x, y-1) && campoMinas[x][y-1] > 0){
        casilla[x][y-1].textContent = campoMinas[x][y-1];
        darClase(x, y-1);
    }else if(buscarLimite(x, y-1) && campoMinas[x][y-1] == 0 && casilla[x][y-1].textContent == ""){
        casilla[x][y-1].textContent = campoMinas[x][y-1];
        
        vaciar(x, y-1);
    }

    if(buscarLimite(x+1, y+1) && campoMinas[x+1][y+1] > 0){
        casilla[x+1][y+1].textContent = campoMinas[x+1][y+1];
        darClase(x+1, y+1);
    }else if(buscarLimite(x+1, y+1) && campoMinas[x+1][y+1] == 0 && casilla[x+1][y+1].textContent == ""){
        casilla[x+1][y+1].textContent = campoMinas[x+1][y+1];
        
        vaciar(x+1, y+1);
    }

    if(buscarLimite(x+1, y) && campoMinas[x+1][y] > 0){
        casilla[x+1][y].textContent = campoMinas[x+1][y];
        darClase(x+1, y);
    }else if(buscarLimite(x+1, y) && campoMinas[x+1][y] == 0 && casilla[x+1][y].textContent == ""){
        casilla[x+1][y].textContent = campoMinas[x+1][y];
        
        vaciar(x+1, y);
    }

    if(buscarLimite(x+1, y-1) && campoMinas[x+1][y-1] > 0){
        casilla[x+1][y-1].textContent = campoMinas[x+1][y-1];
        darClase(x+1, y-1);
    }else if(buscarLimite(x+1, y-1) && campoMinas[x+1][y-1] == 0 && casilla[x+1][y-1].textContent == ""){
        casilla[x+1][y-1].textContent = campoMinas[x+1][y-1];
        
        vaciar(x+1, y-1);
    }
}
console.log(campoMinas);


function buscarLimite(x, y){
    return x >= 0 && x < campoMinas[0].length && y >= 0 && y < campoMinas.length;
}

function darClase(x, y){
    switch(campoMinas[x][y]){
        case 1:
            casilla[x][y].classList.add("n1");
            puntuacion = puntuacion + 1;
            break;
        case 2:
            casilla[x][y].classList.add("n2");
            puntuacion = puntuacion + 2;
            break;
        case 3:
            casilla[x][y].classList.add("n3");
            puntuacion = puntuacion + 3;
            break;
        case 4:
            casilla[x][y].classList.add("n4");
            puntuacion = puntuacion + 4;
            break;
        case 5:
            casilla[x][y].classList.add("n5");
            puntuacion = puntuacion + 5;
            break;
        case 6:
            casilla[x][y].classList.add("n6");
            puntuacion = puntuacion + 6;
            break;
        case 7:
            casilla[x][y].classList.add("n7");
            puntuacion = puntuacion + 7;
            break;
        case 8:
            casilla[x][y].classList.add("n8");
            puntuacion = puntuacion + 8;
            break;
        case 9:
            casilla[x][y].classList.add("n9");
            puntuacion = puntuacion + 9;
            break;
        default:
            
    }
    document.getElementById("puntuacion").innerHTML = `Puntuacion: `+puntuacion;
}
