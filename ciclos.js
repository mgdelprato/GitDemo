//ciclos

// Realizar una función llamada imprimirAzul4 que muestre por consola 4 veces la palabra Azul

function imprimirAzul4(){
    for(let i = 0; i < 4; i++ ){
        console.log("Azul");
    }
}


imprimirAzul4();

// Definí una función llamada imprimir5veces5 que muestre por consola 5 veces el número 5.

function imprimir5veces5(){
     for(let i=0;i<5;i++){
        console.log(5);
        console.log(5);
        console.log(5);






     }
}
imprimir5veces5();

//Sabiendo esto, escribí una función pasitoAPasito, que imprime 5 veces el contenido de i. 

function pasitoAPasito(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
}

pasitoAPasito();

// Escribí una función llamada pasandoPorI (la última letra es una i latina mayúscula) que muestre por consola "acá i tiene el valor de x" donde x va a ser el valor de la variable i en cada iteración, por cada valor que va tomando i desde 0 hasta el numero 4 inclusive.

function pasandoPorI(){
    for(let i=0;i<5;i++){
        console.log("acá i tiene el valor de "+ i);
    }
}

pasandoPorI();

// Realizar una función llamada pasandoPorLosPares() que muestre por consola acá i tiene el valor de x por cada valor PAR que va tomando i desde 0 hasta 6 (inclusive).

function pasandoPorLosPares(){
    for(let i=0;i<=6;i++){
        if(i%2 == 0){
            console.log("acá i tiene el valor de "+ i);
        }
    }
}

pasandoPorLosPares();

// Sabiendo esto escribí una función imprimirAzul, que toma como parámetro un valor numérico X e imprima "Azul" X cantidad de veces. IMPORTANTE te recordamos que "Azul" no es lo mismo que "azul" en este ejercicio debes utilizar "Azul".

function imprimirAzul(num){
    for(let i=0;i<num;i++){
        console.log("Azul");
    }
}

imprimirAzul(12);

// Sabiendo esto, escribí una función sumar5MonedasDe25Centavos, que sume el valor de 5 monedas de 0.25 centavos y retorne el resultado.

function sumar5MonedasDe25Centavos(){
    let totalSum = 0;
    for(let i=0;i<5;i++){
        totalSum = totalSum + 0.25;
    }
    return totalSum;
}

console.log(sumar5MonedasDe25Centavos());


//array
//Declará una función trasladar, que tome dos arrays, saque el último elemento del primero y lo agregue al segundo.

//Solución uno
function trasladar(unArray,otroArray){
    let ultimo=unArray.length-1
    otroArray.push(unArray[ultimo]);
    unArray.pop(unArray[ultimo]);
}

let unArray = [1,2];
let otroArray = [3,4];
trasladar(unArray,otroArray);
console.log(unArray,otroArray);


//solución dos
unArray = [1, 2];
otroArray = [3, 4];
function trasladar(unArray,otroArray){
    let elemento = unArray.pop();
    otroArray.push(elemento);
}


//Conteos
function cantidadDeMesesConGanancia(unPeriodo){
    let ganancia = 0;
    for(let i=0;i<unPeriodo.length;i++){
        if(unPeriodo[i]>0){ganancia++;}
    }
    return ganancia;
}
unPeriodo = [2, 10, -20, 0, 0, -10, 10];
console.log(cantidadDeMesesConGanancia(unPeriodo));


// Completá la función saldosDeMesesConGanancia. Nuevamente tiene una estructura similar a los problemas anteriores, pero, ¡no tan rápido!: esta función tiene que devolver un array.

//Solución Hoy
function saldosDeMesesConGanancia(unPeriodo){
    arrayGanados = [];
    for(let i=0;i<unPeriodo.length;i++){
        if(unPeriodo[i]>0){
            arrayGanados.push(unPeriodo[i]);
        }
    }
    return arrayGanados;
}
console.log(saldosDeMesesConGanancia(unPeriodo));

//Solución vieja
function saldosDeMesesConGanancia(totales){
    let ganancias =[];
    for(let i = 0; i < totales.length ; i++){
        if(totales[i] > 0){
            ganancias.push(totales[i]);
        }
    }
    return ganancias;
}
console.log(saldosDeMesesConGanancia([1]));
console.log(saldosDeMesesConGanancia([2, 20, 20]));
console.log(saldosDeMesesConGanancia([10, -10, 2, 100]));

//Escribí la función cantidadDeMesesConPerdida. La estructura de la función es parecida a las que venimos haciendo, ¡animate!

//Resolución hoy
function cantidadDeMesesConPerdida(unPeriodo){
    let perdidas = 0;
    for(let i=0;i<unPeriodo.length;i++){
        if(unPeriodo[i]<0){perdidas++;}
    }
    return perdidas;
}
console.log(cantidadDeMesesConPerdida(unPeriodo));

//Solución Vieja
function cantidadDeMesesConPerdida(totales){
    let negativos = [];
    for(i=0;i<totales.length;i++){
        if(totales[i]<0){
            negativos.push(totales[i]);
        }
    }
    return negativos.length;
}
console.log(cantidadDeMesesConPerdida([1]));
console.log(cantidadDeMesesConPerdida([2, 20, 20]));
console.log(cantidadDeMesesConPerdida([10, -10, 2, 100]));

// Queremos escribir una función paloDeTruco, que dado un palo, devuelva una lista de strings, una por cada carta de ese palo según las cartas del truco:

// paloDeTruco("espadas")
// ["1 de espadas", "2 de espadas", "3 de espadas" ..., "12 de espadas"]
// Tomá en cuenta que las cartas de truco incluyen todas las numeradas del 1 al 12, excepto por los 8s y los 9s.

// Escribí la función paloDeTruco que reciba el tipo de palo por parametro y devuelva un array

//Solución Actual
function paloDeTruco(palo){
    let cartas = [];
    for(let i = 1;i<13;i++){
        if(i!=8 && i!=9){cartas.push(i+" de "+palo)};
    }
    return cartas;
}

// console.log(paloDeTruco("Espadas"))
// console.log(paloDeTruco("Basto"))
// console.log(paloDeTruco("Oro"))
// console.log(paloDeTruco("Copa"))

//Solución Vieja
function paloDeTruco(palo){
    let numeros = [];
    for (let i=1; i <12;i++){
        console.log("entrofor");
        if( i != 8 && i !=9 ){
            console.log("entroif");
            let valor = (i +" de " + palo);
            numeros.push(valor);
        }
    }
    return numeros;
} 






//contiene
//mas premios

