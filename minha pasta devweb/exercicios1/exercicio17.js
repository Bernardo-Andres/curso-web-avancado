/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
  A     10%
  B     15%
  C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function calculaAumento (plano, salario){
    switch (plano){
        case 'A':
            return salario + (salario * (10/100))
        case 'B':
            return salario + (salario * (15/100))
        case 'C':
            return salario + (salario * (20/100))
        default:
            'o plano é inválido!'
    }
}
//${valor.toFixed(2).replace(".",",") ->( para colocar virgula inves de ponto, e dois 0 no final formando um valor em real)
console.log(`O novo salário é: R$ ${calculaAumento('A', 1200).toFixed(2).replace(".", ",")}`)
console.log(`O novo salário é: R$ ${calculaAumento('B', 1200).toFixed(2).replace(".", ",")}`)
console.log(`O novo salário é: R$ ${calculaAumento('C', 1200).toFixed(2).replace(".", ",")}`)