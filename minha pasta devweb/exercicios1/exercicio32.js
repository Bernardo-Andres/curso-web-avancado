/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function mediaDoVetor (vet){
    let resultado = 0
    let media = 0
    let i = 0
    for(i = 0; i < vet.length; i++){
        media += vet[i]
    }
    resultado = media/vet.length
    return resultado
}

console.log(mediaDoVetor(vet))