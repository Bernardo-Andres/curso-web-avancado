/* Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/

function calculaRecord (pontuacao) {
    let recorde = 0
    let piorJogo = 0
    let maiorPontuacao = pontuacao[0]
    let menorPontuacao = pontuacao[0]
    let i = 0
        for(i = 0; i <= pontuacao.length; i++){
            if(Number(pontuacao[i]) > maiorPontuacao){
                maiorPontuacao = pontuacao[i]
                recorde ++ 
            }
            if (Number(pontuacao[i]) < menorPontuacao){
                menorPontuacao = pontuacao[i]
                piorJogo = i + 1
            }
        }
        return `Pedro conseguiu bater seu record ${recorde} e seu pior jogo foi: ${piorJogo}`
}

let vetor = ['10','20','20','8','25','3','0','30','1']

console.log(calculaRecord(vetor))