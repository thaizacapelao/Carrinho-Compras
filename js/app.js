function adicionar() {
// recuperar valores, nome do produto, quantidade e valor
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
// calcular o preço, o nosso subtotal
let preco = quantidade * valorUnitario;
let carrinho = document.getElementById('lista-produtos');

carrinho.innerHTML = `<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
</section>`
// adicionar no carrinho
// atualizar o valor total da compra

let valorTotal = document.getElementById('valor-total');

valorTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${preco}</span>`

}

function limpar() {
    
}