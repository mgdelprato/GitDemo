COPIA

COPIA

COPIA

COPIA

COPIA


function alturaArbolUtopico(ene){
    let altura=1;
    for(let i=0;i<=ene;i++){
        if(i==0){
            altura=altura+0;
        }else if (i%2==0 && i !=0){
            altura++;
        }else if (i%2!=0){
            altura = altura*2;
        }
    }
    return altura;
}
function alturaArbollitoUtopico(ene){
    let altura=1;
    for(let i=0;i<=ene;i++){
        if(i==0){
            altura=altura+0;
        }else if (i%2==0 && i !=0){
            altura++;
        }else if (i%2!=0){
            altura = altura*2;
        }
    }
    return altura;
}
console.log(alturaArbolUtopico(0));
console.log(alturaArbolUtopico(1));
console.log(alturaArbolUtopico(2));
console.log(alturaArbolUtopico(3));
// console.log(alturaArbolUtopico(4));
// console.log(alturaArbolUtopico(5));

// function alturaArbolUtopico(ene){
//     let altura = 1; 
//     for(let i=0;i<=ene;i++){
//         if(i%2 == 0 && i!=0){
//             altura = altura +1;
//         }else if(i %2 !=0){
//             altura = altura *2;
//         }else if(i==0){
//             altura= altura +0;
//         }
//     }
//     return altura;
// }
