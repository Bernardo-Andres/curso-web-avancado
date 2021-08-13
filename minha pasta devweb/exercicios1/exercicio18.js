/* Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

function escreveExtenso (numero){
    switch (numero){
        case 0:
            console.log('Zero')
            break
        case 1:
            console.log('Um')
            break
        case 2:
            console.log('Dois')
            break
        case 3:
            console.log('Tres')
            break
        case 4:
            console.log('Quatro')
            break
        case 5:
            console.log('Cinco')
            break
        case 6:
            console.log('Seis')
            break
        case 7:
            console.log('Sete')
            break
        case 8:
            console.log('Oito')
            break
        case 9:
            console.log('Nove')
            break
        case 10:
            console.log('Dez')
            break
        default:
            console.log('Número fora do intervalo!')
    }
}

escreveExtenso(10)
escreveExtenso(9)
escreveExtenso(8)
escreveExtenso(7)
escreveExtenso(6)
escreveExtenso(5)
escreveExtenso(4)
escreveExtenso(3)
escreveExtenso(2)
escreveExtenso(1)
escreveExtenso(0)
escreveExtenso(11)