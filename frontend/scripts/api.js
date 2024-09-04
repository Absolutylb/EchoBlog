const API_URL = 'http://localhost:3000';

async function fetchPostagens() {
const response = await fetch(`${API_URL}/postagens`);
const data = await response.json();
return data;
}

async function createPostagem(postagemData, imagemFile) {
const formData = new FormData();
formData.append('titulo', postagemData.titulo);
formData.append('conteudo', postagemData.conteudo);
formData.append('autor', postagemData.autor);
if (imagemFile) {
formData.append('imagem', imagemFile);
}

const response = await fetch(`${API_URL}/postagens`, {
method: 'POST',
body: formData
});

const data = await response.json();
return data;
}
