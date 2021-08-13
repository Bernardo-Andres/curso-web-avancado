/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

function Intervalo (vet) {
    numerosNoIntervalo = 0
    numerosForaIntervalo = 0
    for (let i = 0; i < vet.length; i++) {
        if(vet[i] >= 10 && vet[i] <= 20){
            numerosNoIntervalo++
        }else {
            numerosForaIntervalo++
        }
    }
    return `${numerosNoIntervalo} números estão dentro do intervalo.\n${numerosForaIntervalo} números fora do intervalo`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(Intervalo(vetor))