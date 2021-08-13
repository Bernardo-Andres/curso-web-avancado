/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function  letraRepetida (plavra1, palavra2){
    let i
    let letraPalavra1
    let j
    let letraPalavra2
    let repetido = true;
    for (i = 0; i < plavra1.length; i++) {
        letraPalavra1 = plavra1.charAt(i).toLowerCase()
        for (j = 0; j < palavra2.length; j++) {
            letraPalavra2 = palavra2.charAt(j).toLowerCase()
            if(plavra1 == palavra2){
                repetido = true
                
            } else {
                repetido = false
            }
         }
    }
    return repetido
}

console.log(letraRepetida('Teste', 'Teste'))


























