/* Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function imparesParesVet (vet){
    let pares = 0
    let impares = 0
    let i = 0
    for (i = 0; i < vet.length; i++){
        if(vet[i] % 2 == 0){
            pares++
        } else{
            impares++
        }
    }
    console.log(`${pares} números pares e ${impares} números ímpares.`)
}

imparesParesVet(vet)