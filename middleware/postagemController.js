const { Postagem } = require('../models');
const upload = require('../middleware/upload');

// RF06 - Upload de Imagem para Postagem
exports.uploadImagem = [
upload.single('imagem'),
async (req, res) => {
try {
const postagem = await Postagem.findByPk(req.params.id);
if (!postagem) {
return res.status(404).json({ error: "Postagem não encontrada" });
}

// Salvar o caminho da imagem na postagem
postagem.imagem = req.file.path;
await postagem.save();

res.json({ mensagem: "Imagem carregada com sucesso!", postagem });
} catch (error) {
res.status(400).json({ error: error.message });
}
}
];
