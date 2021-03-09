// Funçao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6, 7, 8)// ira fazer a soma dos dois primeiros e ignorar o resto 2 e 3 = 5
imprimirSoma()

// Funçao com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 10))
console.log(soma(2))//imagina que o valor padrao é 1
console.log(soma())