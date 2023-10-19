//cria o bloco de funcioario -- adm ou func
function bloco(div, dados_func){
    let col = document.createElement("div")
    col.classList.add('col-3', "p-2", "mx-2", 'div-saltar')
//criar event listener para perfil de funcionario
    let card = document.createElement("div")
    col.classList.add('card')

    let img = document.createElement('img')
    img.classList.add('card-img-top')
    img.src = dados_func.img 

    let card_body = document.createElement("div")
    card_body.classList.add('card-body')
    
    let name = document.createElement("h5")
    name.classList.add("card-title")
    name.textContent = dados_func.nome

    let cargo = document.createElement('p')
    cargo.classList.add("cad-text")
    cargo.textContent = dados_func.cargo

    card_body.appendChild(name)
    card_body.appendChild(cargo)
    card.appendChild(img)
    card.appendChild(card_body)
    col.appendChild(card)
    div.appendChild(col)
}

function alimentarFunc(data){
    const div = document.querySelector("#func")
    data.forEach(funcionario => {
        bloco(div, funcionario)
    })
}


function funcionarios() {
    //ajax para servidor php
    fetch('http://127.0.0.1:8000/api/funcionarios', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alimentarFunc(data)
    })
    .catch(error => {
        console.error(error);
    });
}

function alimentarAdm(data){
    const div = document.querySelector("#adm")
    data.forEach(adm => {
        bloco(div, adm)
    })
}


function adms() {
    //ajax para servidor php
    fetch('http://127.0.0.1:8000/api/usuarios', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alimentarAdm(data)
    })
    .catch(error => {
        console.error(error);
    });
}