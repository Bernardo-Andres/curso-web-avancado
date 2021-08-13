/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

vet = [80, 34, 67, 2, 78, 55, 55, 80, 3, 99, 9, 13]

function descobreMaiorMenorVet (vet) {
    let maior = vet[0]
    let menor = vet[0]
    let i
    for(i = 0; i < vet.length; i++){
        if(vet[i] > maior){
            maior = vet[i]
        }
        if(vet[i] < menor){
            menor = vet[i]
        }
    }
    return [maior, menor]
}

console.log(descobreMaiorMenorVet(vet))