/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function calculaNota (nota1, nota2, nota3, codigo){
    let media = 0
    var mediat = 0
    if(nota1 >= nota2  && nota1 >= nota3){
        let media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
        mediat = media
        console.log(`A nota do aluno ${codigo} é: ${media}`)
    } else if (nota2 >= nota1 && nota2 >= nota3){
        let media = ((nota2 * 4) + (nota1 * 3) + (nota3 * 3)) / 10
        mediat = media
        console.log(`A nota do aluno ${codigo} é: ${media}`)
    }else {
        let media = ((nota3 * 4) + (nota1 * 3) + (nota2 * 3)) / 10
        mediat = media
        console.log(`A nota do aluno ${codigo} é: ${media}`)
    } 
    if(mediat >= 5){
        console.log('Aprovado!!!')
    } else {
        console.log('REPROVADO!!!')
    }
}

calculaNota(3, 5, 5, 100)