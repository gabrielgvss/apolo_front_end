//cria o bloco de funcioario -- adm ou func
function bloco(div, dados_func) {
    let col = document.createElement("div");
    col.classList.add('col-md-3', 'mb-5', 'div-saltar', 'mx-3', 'p-0');

    let card = document.createElement("div");
    card.classList.add('card', 'h-100', 'border-0');

    let cardBody = document.createElement("div");
    cardBody.classList.add('card-body', 'd-flex', 'align-items-center');
//adcionar event listener para o perfil do funcionario (perfil é generico para func and cliente)
    let img = document.createElement('img');
    img.classList.add('img-fluid', 'mb-4', 'rounded-circle'); 
    img.src = dados_func.img;
    img.style.width = "32px"
    img.style.height = "32px"

    let infoDiv = document.createElement("div");
    infoDiv.classList.add('mx-4')

    let name = document.createElement("h5");
    name.classList.add('card-title');
    name.textContent = dados_func.nome;

    let cargo = document.createElement('p');
    cargo.classList.add('card-text', 'text-secondary');
    cargo.textContent = "cargo: " +  dados_func.cargo;

    infoDiv.appendChild(name);
    infoDiv.appendChild(cargo);

    cardBody.appendChild(img);
    cardBody.appendChild(infoDiv);
    card.appendChild(cardBody);
    col.appendChild(card);
    div.appendChild(col);
}


function alimentarFunc(data, div){
    
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

function alimentarAdm(data, div){
    
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