let produtos=[

{
nome:"Cabo Tipo C para IOS - IT BLUE LE-844",
preco:20,
img:"images/Cabo Tipo C p_ IOS Foto 01.jpg"
},

{nome:"Cabo USB para Micro USB",preco:15,img:"images/Cabo USB Foto 01.jpg"},
{nome:"Cabo USB para IOS",preco:15,img:"images/Cabo USB p_ IOS Foto 01.jpg"},
{nome:"Caixa de som Bluetooth",preco:120,img:"images/Caixa de som Bluetooth Foto 01.jpg"},

{nome:"Fone Gamer Bluetooth 8 horas de duração",preco:65,img:"images/Fone Gamer Bluetooth Foto 01.jpg"},
{nome:"Câmera de segurança - Acesso Remoto",preco:200,img:"images/Câmera Foto 01.jpg"},
{nome:"Produto Exemplo 7",preco:45,img:"images/Carregador Turbo Foto 01.jpg"},
{nome:"Produto Exemplo 8",preco:70,img:"https://via.placeholder.com/200"},

{nome:"Produto Exemplo 9",preco:20,img:"https://via.placeholder.com/200"},
{nome:"Produto Exemplo 10",preco:80,img:"https://via.placeholder.com/200"},
{nome:"Produto Exemplo 11",preco:25,img:"https://via.placeholder.com/200"},
{nome:"Produto Exemplo 12",preco:55,img:"https://via.placeholder.com/200"},

{nome:"Produto Exemplo 13",preco:90,img:"https://via.placeholder.com/200"},
{nome:"Produto Exemplo 14",preco:65,img:"https://via.placeholder.com/200"},
{nome:"Produto Exemplo 15",preco:32,img:"https://via.placeholder.com/200"},
{nome:"Produto Exemplo 16",preco:28,img:"https://via.placeholder.com/200"}

]

let carrinho=JSON.parse(localStorage.getItem("carrinho"))||[]

function carregarProdutos(){

let area=document.getElementById("produtos")
area.innerHTML=""

produtos.forEach((p,i)=>{

area.innerHTML+=`

<div class="produto">

<img src="${p.img}" onclick="abrirZoom('${p.img}')">

<h3>${p.nome}</h3>

<p>R$ ${p.preco}</p>

<button onclick="addCarrinho(${i})">
Adicionar ao Carrinho
</button>

</div>

`

})

}

function addCarrinho(i){

carrinho.push(produtos[i])

salvar()

}

function remover(i){

carrinho.splice(i,1)

salvar()

}

function salvar(){

localStorage.setItem("carrinho",JSON.stringify(carrinho))

atualizarCarrinho()

}

function atualizarCarrinho(){

let lista=document.getElementById("lista")
lista.innerHTML=""

let total=0

carrinho.forEach((item,i)=>{

total+=item.preco

lista.innerHTML+=`

<div class="item">

${item.nome} - R$${item.preco}

<button onclick="remover(${i})">X</button>

</div>

`

})

document.getElementById("contador").innerText=carrinho.length
document.getElementById("total").innerText=total

}

function buscar(){

let texto=document.getElementById("busca").value.toLowerCase()

let cards=document.querySelectorAll(".produto")

cards.forEach(card=>{

let nome=card.innerText.toLowerCase()

card.style.display=nome.includes(texto)?"block":"none"

})

}

function checkout(){

let pedido="Pedido:%0A"

let total=0

carrinho.forEach(p=>{

pedido+=`${p.nome} - R$${p.preco}%0A`

total+=p.preco

})

pedido+=`Total: R$${total}`

alert("Pedido gerado!")

}

function whatsapp(){

let numero="5583981214673"

let pedido="Pedido:%0A"

let total=0

carrinho.forEach(p=>{

pedido+=`${p.nome} - R$${p.preco}%0A`

total+=p.preco

})

pedido+=`Total: R$${total}`

window.open(`https://wa.me/${numero}?text=${pedido}`)

}

function abrirZoom(img){

document.getElementById("zoom").style.display="flex"
document.getElementById("imgZoom").src=img

}

function fecharZoom(){

document.getElementById("zoom").style.display="none"

}

/* abrir e fechar carrinho */

function toggleCarrinho(){

let carrinho=document.getElementById("carrinho")
let overlay=document.getElementById("overlay")

carrinho.classList.toggle("carrinho-fechado")

if(carrinho.classList.contains("carrinho-fechado")){
overlay.style.display="none"
}else{
overlay.style.display="block"
}

}

carregarProdutos()
atualizarCarrinho()