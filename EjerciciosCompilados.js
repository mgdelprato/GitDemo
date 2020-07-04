
// Podemos usar console.log para imprimir el valor que tiene asignado unNumero. Su resultado será 124.

//Declarando Variables

let unNumero = 124;
console.log(unNumero);

// Veamos si se entiende: Declará y asigná dos variables numeroA  y  numeroB , para posteriormente en las 
// variables (¡qué tenes que definir vos!)  resultadoSuma , resultadoResta , resultadoMultiplicacion 
// y resultadoDivision almacenar el resultado de la operación que corresponda al nombre de cada una de ellas.

let numeroA = 12;
let numeroB = 20;

let resultadoSuma = numeroA + numeroB;
let resultadoResta = numeroA - numeroB;
let resultadoMultiplicacion = numeroA * numeroB;
let resultadoDivision = numeroA / numeroB;

// Probá éstos conocimientos declarando la función triple para triplique el valor pasado por parámetro.	

function triple(unNumero){
    //asdfasdf
    //asdfasfd
    return 3 * unNumero;    
}

function mitad(unNumero){
    return unNumero/2;
}

// Como veras, ye te damos la función cuadruple que recibe un número y lo multiplica por 4. 
// Ahora te pedimos que debajo de la declaración te encargue de ejecutar esa función, para ello
// necesitas darle un valor de reemplazo al parámetro, en este caso te pedimos que el valor sea 5.
// Además queremos que imprimas por consola el resultado de esa ejecución.

function cuadruple(numero) {
    return 4* numero;
 }
 console.log(cuadruple(5));

//  Escribí la función multiplicar que tome dos parámetros, los multiplique y retorne su valor.

function multiplicar(numeroA,numeroB){
    return numeroA*numeroB;
}

// Hagamos una función llamada perimetro que nos diga el perímetro de un círculo cuando le
// damos el radio como parámetro.

// Luego hagamos otra función llamada  area que nos dé el area de un círculo cuando recibe 
// el radio como parámetro.

function perimetro(radio){
return 3.14*radio*2;
}
function area(radio){
  return 3.14*radio*radio;    
}

// Probemos qué tan claro quedó: Escribí una función longitudNombreCompleto que tome un nombre y un apellido como parametro y devuelva su longitud total, contando un espacio extra para separar a ambos.

function longitudNombreCompleto(nombre,apellido){
    let todo = nombre+" "+apellido;
    return todo.length;
console.log(todo)

}
console.log("Cosme","Fulanito");

// Escribí la función escribirCartelito, que tome como parámetros un título, un nombre y
// un apellido y devuelva un único string como resultado.

function escribirCartelito(titulo,nombre,apellido){
    return titulo+" "+nombre+" "+apellido;
}

//Condicionales

// Declará la variable diaDeSemana y asignale el valor "Domingo". Luego implementa un condicional usando el if que compare la igualdad de diaDeSemana con el día "Domingo" , y si es verdadero que imprima por pantalla "¡Hoy es día de descanso!".




let diaDeSemana = "Domingo";
if(diaDeSemana == "Domingo"){
    console.log("¡Hoy es día de descanso!");
}


// Definí la función sePoneLaOlla, la cual recibe por parámetro el string del día de la semana. Esta función retorna "¡Pongamos la olla, hoy se comen pastas!" si recibe por parámetro el valor "Domingo", caso contrario retornará "Mejor lo dejamos para el domingo".

function sePoneLaOlla(dia){
    if(dia == "Domingo"){
        return ("¡Pongamos la olla, hoy se comen pastas!")
    }else{
        return ("Mejor lo dejamos para el domingo")
    }
}

// Definí la función elMayor, la cual debe recibir por parámetro dos números, y como resultado nos devuelva (retorne) el mayor de los dos. Por ejemplo, si la función recibiera 4 y 5 retornaría 5 pues es el mayor, y si pasamos 10 y 4, retornará 10.


function elMayor(numA,numB){
    if(numA>numB){
        return numA;
    }else{
        return numB;
    }
   }

//    Vamos a por ello, definí la función signo, para lograr el objetivo deseado.

//    TIP: Acá la estructura está pidiendo el uso de if, de else if y de else dentro de una función!

function signo(numero){
    if (numero > 0){
        return 1
    }else if(numero == 0){
        return 0
    }else{
        return -1
    }
}

// Es tu turno. Define la función puedoIrAlBanco la cual, recibiendo dos parámetros, el primero: diaDeLaSemana (string) y el segundo horaActual (number), deberá retornar true, solo si es posible ir al banco y que lo encontremos abierto.


function puedoIrAlBanco(diaDeLaSemana,horaActual){
    return diaDeLaSemana != "Domingo" && diaDeLaSemana != "Sábado" && horaActual >= 10 && horaActual<=15;
} 


// Definí la función filosofoHipster  que tome 3 parámetros (en éste orden):
// La profesión de una persona(string)
// Su nacionalidad (string)
// La cantidad de kilómetros que camina por día (number)
// Y que evalúe con estos datos, si una persona es o no (true/false) un Filósofo Hipster. Tené en cuenta que un Filósofo Hipster es alguien con Nacionalidad Argentina, de profesión Músico y a quien le gusta caminar más de 2 kilómetros por día.

function filosofoHipster(profesion, nacionalidad, kmXDia){
    return nacionalidad == "Argentina" && profesion == "Músico" && kmXDia > 2;
}


// Escribí la función esNumeroDeLaSuerte la cual recibiendo un número, le diga a Mariana si es un número de la suerte. Recuerda que el número debe cumplir con las tres condiciones mencionadas:

// Tiene que ser un número positivo.
// Tiene que ser múltiplo de 2 o de 3
// No tiene que ser el número 15
// Tu reto adicional será: NO usar el if. Sólo deberás usar la palabra reservada  return  dentro de tu código para generar la expresión.

function esNumeroDeLaSuerte(num){
    return num > 0 && (num%2 == 0 || num%3 == 0) && num != 15;
}

// Alcanzar la altura mínima de 1.5m (o 1.2m si está acompañada por un adulto)
// No tener ninguna afección cardíaca
// Definí la función puedeSubirse, la cual, recibiendo 3 parámetros:

// alturaPersona (number)
// vieneConCompania (booleano)
// tieneAfeccionCardiaca (booleano)
// Retorne true  o  false  según el caso. Tené en cuenta, las condiciones necesarias, mencionadas anteriormente.

function puedeSubirse(altura,compa,cardi){
    return ((altura >= 1.2 && compa) || (altura >= 1.5)) && cardi != true;
}


function acompania(alturaPersona,vieneConCompania){
    return (alturaPersona>=1.2 &&vieneConCompania) || alturaPersona>=1.5;
}
//console.log(acompania(alturaPersona,vieneConCompania));

function puedeSubirse(alturaPersona,vieneConCompania,tieneAfeccionCardiaca){
return acompania(alturaPersona,vieneConCompania) && tieneAfeccionCardiaca==false;
}


// Ya has llegado al nivel necesario para ganarte un premio por tu excelente rendimiento. Ahora que ya sabés lo suficiente de JavaScript, el jurado de un torneo de programación, nos pidió que desarrollemos la función medallaSegunPuesto, la cual retorne la medalla que le corresponde a los primeros puestos, según la siguiente lógica:

function medallaSegunPuesto(puesto){
    if (puesto == 1){
        return "Oro";
    }else if (puesto==2){
        return "Plata";
    }else if (puesto==3){
        return "Bronce";
    }else{
        return "Seguí participando";
    }
}


