function adicionar() {
// recuperar valores, nome do produto, quantidade e valor
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
let preco = quantidade * valorUnitario;

alert(nomeProduto);
alert(valorUnitario);
alert(quantidade);
alert(preco);


// calcular o preço, o nosso subtotal
// adicionar no carrinho
// atualizar o valor total da compra
}

function limpar() {
    
}