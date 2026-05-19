const chave = 'edo5dOmA9oNmZH9pZz7dPl085JUcG30Z4kc3KVQ9';

const divImagem = document
    .querySelector('.imagem');

async function acessarApi(data) {
    const response = 
        await fetch(
        'https://api.nasa.gov/planetary/apod?api_key=' + chave + '&date=' + data
        );

    if (response.status !== 200) {
        alert('Não consegui acessar a api');
        return null;
    }

    const dados = await response.json();

    if (dados.media_type === 'image') {
        return {
            title: dados.title,
            date: dados.date,
            desc: dados.explanation,
            img: dados.url
        }
    }
    
    alert('Não é imagem')
    return null; 
}

document
    .querySelector('form')
    .addEventListener('submit', async (event) => {
        event.preventDefault();

        const form = event.target;
        const input = form.querySelector('input');

        const date = input.value;
        divImagem.style.display = 'none';

        const dados = await acessarApi(date);
        if (!dados) return;

        const img = divImagem.querySelector('img');
        const h2 = divImagem.querySelector('h2');
        const small = divImagem.querySelector('small');
        const p = divImagem.querySelector('p');

        img.setAttribute('src', dados.img);
        h2.innerHTML = dados.title;
        small.innerHTML = dados.date;
        p.innerHTML = dados.desc;

        divImagem.style.display = 'block';
    });
