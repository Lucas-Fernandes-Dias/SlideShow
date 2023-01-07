'use strict';

const imagens = [
    {'id': '1', 'url':'./imagens/1.png'},
    {'id': '2', 'url':'./imagens/2.png'},
    {'id': '3', 'url':'./imagens/3.png'},
    {'id': '4', 'url':'./imagens/4.png'},
]

const containerItems = window.document.querySelector('.container-items');

const loadImagens = ( imagens, container) => {
    imagens.forEach ( imagem => {
        container.innerHTML += `
        <div class='item'>
            <img src='${imagem.url}'
        </div>
        `
    })
}
loadImagens( imagens, containerItems );

let items = window.document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = window.document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length -1]
    containerItems.insertBefore( lastItem, items[0] );
    items = window.document.querySelectorAll('.item');
}

window.document.querySelector('#previous').addEventListener('click', next)
window.document.querySelector('#next').addEventListener('click', previous)