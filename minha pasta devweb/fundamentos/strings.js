const escola = "Cod3r"

console.log(escola.charAt(4))

//teste
console.log(escola.charAt(5)) //Nao gera resultado de erro deixa em vazio

console.log(escola.charCodeAt(3)) //charCodeAt mostra o resultado na tabela unicode/ASCII na posiçao 3

console.log(escola.indexOf('r')) // mostra a posiçao da exata letra

console.log(escola.substring(1)) // mostra a partir da posiçao 1 ex:od3r

console.log(escola.substring(0, 3))// do indice 0 ate o indice 3 sem incluir o 3

console.log('escola '.concat(escola).concat("!"))
console.log('escola '+(escola)+("!"))

console.log(escola.replace(3, 'e'))// troca a posiçao da letra pela setada no caso "3" por "e"

console.log('Ana,Maria,Pedro'.split(','))