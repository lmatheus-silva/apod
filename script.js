const chave = 'edo5dOmA9oNmZH9pZz7dPl085JUcG30Z4kc3KVQ9';

const divImagem = document
    .querySelector('.imagem');

async function acessarApi(data) {
    const json = fetch('https://api.nasa.gov/planetary/apod');
}

document
    .querySelector('form')
    .addEventListener('submit', (event) => {
        event.preventDefault();

        const form = event.target;
        const input = form.querySelector('input');
    });