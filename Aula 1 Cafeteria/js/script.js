console.log('Olá Mundo!')
//variaveis em javascrip
let num = 1 //declaracao
num = 3 //atribuição
console.log(`O valor da variavel é ${num}`) // entre crases

let pessoa = 'Deus'
let adjetivo = '❤️' //unicode
console.log(`${pessoa} é ${adjetivo}`)

let peso = 62
let altura = 1.68
let imc = peso / (altura * altura) //** = exponenciacao/
console.log(`O IMC é ${imc}`)

let usaVape = true
if (usaVape) {
    console.log('Vai morrer!')
} else {
    console.log('Parabésn!')
}

//operador ternário
console.log(usaVape ? 'cuidado!' : 'Tá de boas')

// objeto em js
let client = {
    nome: 'Maria José',
    idade: 40,
    sexo: 'feminino',
    clube: false,
    email: null
}
console.log(`${client['nome']} é do sexo ${client.sexo}`)