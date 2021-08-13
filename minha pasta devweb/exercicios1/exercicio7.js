/* Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

function Bhaskara (ax2, bx, c){
    let resultado = (bx ** 2) - (4 * ax2 * c)
    let raiz = Math.sqrt (resultado)
    let x = (-bx + raiz) / (2 * ax2)
    let x2 = (-bx - raiz) / (2 * ax2)
    return `O resultado da expressão é de: ${resultado} com a raiz ${raiz} com o x de valor: ${x} e ${x2}`
}
console.log(Bhaskara(100, 456 ,3 ))