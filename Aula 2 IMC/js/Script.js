/** 
* @Author George Soares
* @since 2026-03-03
* @version 1.0.0
* @description Esta função calcula o IMC a partir do peso e altura
* @param {Number} peso - O peso da pessoa em KG
* @param {number} altura - A altura da pessoa em metros
* @returns {number} O valor do IMC calculado
*/

function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura)
    return imc
}

//console.log(calcularIMC(90,1.71)) // apenas testes
/** obtem a classificação do IMC
* @Author George Soares
* @since 2026-03-03
* @version 1.0.0
* @description Esta função mostra a classificação do IMC
* @param {Number} imc - O valor já calculado do IMC
* @returns {string} A classificação do IMC. EX: Peso normal, sobrepeso, etc.
*/
function obterClassificacaoIMC(imc) {
    let resultado = '' //resultado começa vazio
    if (imc < 18.5) {
        resultado = 'Abaixo do peso'
    } else if (imc < 25) {
        resultado = 'Peso Normal'
    } else if (imc < 30) {
        resultado = 'Sobrepeso'
    } else {
        resultado = 'Obesidade'
    }
    return resultado
}
//console.log(obterClassificacaoIMC(16.00)) // apenas testes

function processaCalculo(event) {
    if (event) event.preventDefault()//evita o recarregamento da UI
    //Obtém os campos
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const nascimento = document.getElementById('nascimento').value
    //define a área do resultado
    const divResultado = document.getElementById('resultado')
    //validação básica
    if (!nome || !nascimento || isNaN(peso) || isNaN(altura)) {
        alert('Por favor, preencha todos os campos corretamente')
        return
    }
    //efetuar os cáculos com as funções criadas
    const imc = calcularIMC(peso, altura)
    const classificação = obterClassificacaoIMC(imc)
    //mostrando o resultaod
    divResultado.style.display = 'block' //volta a mostrar a div // br = broken row quebra de linha - to fixed fixando em duas casas decimais
    divResultado.innerHTML = `Resultado para <strong> ${nome}</strong><br> 
                              IMC: <strong>${imc.toFixed(2)}</strong><br> 
                              Status: <strong>${classificação}</strong>`
    //`A crase é uma string literal`
}
// Limpar o resultado
document.addEventListener('reset',()=>{
    //obtemos a div que iremos limpar
    const divResultado = document.getElementById('resultado')
    //limpamos o texto da div
    divResultado.innerHTML = ''
    //ocultamos o elemento novamente
    divResultado.style.display = 'none'
})