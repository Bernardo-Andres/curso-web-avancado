/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Bernardo', 'Hanna', 'Pedro', 'Rafael']
let vetorDouble = [1.5, 2.5, 3.5, 4.5]

function concatenar () {
    var resultado = []
    let i = 0
    for(i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorInteiro, vetorString))
