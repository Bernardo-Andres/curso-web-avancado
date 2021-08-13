/*Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

function simulaCalculadora (v1, operacao, v2){
    switch (operacao){
        case '+':
            return v1 + v2
        case '-':
            return v1 - v2
        case '*':
            return v1 * v2
        case '/':
            return v1 / v2
        default:
            return 'operação invelida!'
    }
}

console.log(simulaCalculadora(2, '+', 3))
console.log(simulaCalculadora(2, '-', 3))
console.log(simulaCalculadora(2, '*', 3))
console.log(simulaCalculadora(2, '/', 3))
console.log(simulaCalculadora(2, 'e', 3))