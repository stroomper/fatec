//Projeto  Café Mania
const nomeLoja = 'Café Mania' // não muda
//pedido

let pedido = {
    nome: 'Melk',
    cafe: 12.50,
    quantidade: 2,
    status: 'Aberto'
}
//calculando o total
let total = pedido.cafe * pedido.quantidade
//mudamos o status
pedido.status = 'Concluido'
// se o status for concluido qual a condição do pedido
console.log(pedido.status === 'Concluido'
    ? `${nomeLoja} - pedido do cliente ${pedido.nome} está finalizado`
    : `Aguarde ser chamado`    //se não, aguarde ser chamado
)