let num1 = 1
let num2 = 2

num1++ //pos fixada acrescenta 1 unidade do valor
console.log(num1)

--num1 //pre fixada diminui 1 unidade do valor
console.log(num1)

console.log(++num1 === num2--)// pre fixada é resolvido antes
console.log(num1 === num2)