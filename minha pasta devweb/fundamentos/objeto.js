const prod1 = {}
prod1.nome = 'Celular Ultra Mega' //objetos sao um conjunto de chaves e valores
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome:'Camisa polo',
    preco: 79.90
}

console.log(prod2)
// Formato .json ->>'{"nome": "Camisa Polo" , "preco": 79.98}'
