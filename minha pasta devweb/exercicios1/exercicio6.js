/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function calcularJurosSimples (capital, juros, tempo) {
    let Simples = capital + (capital * juros * tempo)
    return Simples
}

function calcularJurosComposto (capital, juros, tempo) {
    let composto = capital * (1 + juros) ** tempo
    return composto
}

console.log(`Juros Simples: ${calcularJurosSimples(1000, 0.2, 2)}`)
console.log(`Juros Composto: ${calcularJurosComposto(1000, 0.2, 2)}`)