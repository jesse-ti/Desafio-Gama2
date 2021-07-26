let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let telefone = document.querySelector('#telefone')
let endereco = document.querySelector('#endereco')

let produto = document.querySelector('#produto')
let descricao = document.querySelector('#descricao')
let valor = document.querySelector('#valor')



function cadastrarCliente(){
    if(nome, email, telefone, endereco){
        let listCliente = JSON.parse(localStorage.getItem('listCliente') || '[]')

        listCliente.push(
            {
                nomeCad: nome.value,
                emailCad: email.value,
                telefoneCad: telefone.value,
                enderecoCad: endereco.value,
                render()
            }
        )

        localStorage.setItem('listCliente', JSON.stringify(listCliente))
    }
 }

 function cadastrarProduto(){
    if(produto, descricao, valor){
        let listProduto = JSON.parse(localStorage.getItem('listProduto') || '[]')

        listProduto.push(
            {
                produtoCad: produto.value,
                descricaoCad: descricao.value,
                valorCad: valor.value,
            }
        )

        localStorage.setItem('listProduto', JSON.stringify(listProduto))
    }
 }

