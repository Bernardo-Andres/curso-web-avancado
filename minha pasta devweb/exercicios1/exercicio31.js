/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

vet = [10, 5, 7, 2, -1, -9, -45, -8, 34, 4]

function retornaNegativo (vet) {
    let negativos = 0
    let i = 0
    for(i = 0; i < vet.length; i++){
        if(vet[i] < 0){
            negativos++
        }
    }
    return negativos
}

console.log(retornaNegativo(vet))