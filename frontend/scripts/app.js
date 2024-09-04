document.addEventListener('DOMContentLoaded', async () => {
const postagensContainer = document.getElementById('postagens-container');
const createPostagemForm = document.getElementById('create-postagem-form');
const tituloInput = document.getElementById('titulo');
const conteudoInput = document.getElementById('conteudo');
const autorInput = document.getElementById('autor');
const imagemInput = document.getElementById('imagem');

async function renderPostagens() {
const postagens = await fetchPostagens();
postagensContainer.innerHTML = postagens.map(postagem => `
<div class="postagem">
<h3>${postagem.titulo}</h3>
<p>${postagem.conteudo}</p>
<small>Por ${postagem.autor} em ${new Date(postagem.dataPublicacao).toLocaleDateString()}</small>
${postagem.imagem ? `<img src="${postagem.imagem}" alt="${postagem.titulo}">` : ''}
</div>
`).join('');
}

createPostagemForm.addEventListener('submit', async (event) => {
event.preventDefault();

const postagemData = {
titulo: tituloInput.value,
conteudo: conteudoInput.value,
autor: autorInput.value
};

const imagemFile = imagemInput.files[0];

await createPostagem(postagemData, imagemFile);

tituloInput.value = '';
conteudoInput.value = '';
autorInput.value = '';
imagemInput.value = '';

await renderPostagens();
});

await renderPostagens();
});
