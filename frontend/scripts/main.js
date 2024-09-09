async function carregarPostagens() {
const response = await fetch('http://localhost:3000/postagens');
const data = await response.json();

const postsContainer = document.getElementById('posts');
postsContainer.innerHTML = data.postagens.map(post => `
<article>
<h2>${post.titulo}</h2>
<p>${post.conteudo}</p>
<img src="${post.imagem}" alt="Imagem da postagem">
</article>
`).join('');
}

carregarPostagens();
