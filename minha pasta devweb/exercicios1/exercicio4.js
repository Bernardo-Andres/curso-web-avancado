/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function resultadoRestoDiv (dividendo, divisor) {
    let resto = dividendo / divisor 
    let divisao = Math.floor(dividendo / divisor)
    console.log(`A divisão é: ${divisao} e o resto é: ${resto}`)
}
resultadoRestoDiv(14, 5)