const { Postagem } = require("../models");
const { z } = require("zod");

// Validação de entrada usando Zod
const postagemSchema = z.object({
  titulo: z.string().min(1, "Título é obrigatório."),
  conteudo: z.string().min(1, "Conteúdo é obrigatório."),
  autor: z.string().min(1, "Autor é obrigatório."),
  imagem: z.string().optional(),
});

// RF01 - Criar Postagem
exports.criarPostagem = async (req, res) => {
  try {
    const postagemValida = postagemSchema.parse(req.body);
    const novaPostagem = await Postagem.create(postagemValida);
    return res.status(201).json(novaPostagem);
  } catch (error) {
    return res.status(400).json({ error: error.errors });
  }
};

// RF02 - Listar Postagens
exports.listarPostagens = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;

  const { count, rows } = await Postagem.findAndCountAll({
    offset: parseInt(offset),
    limit: parseInt(limit),
  });

  res.json({
    totalPostagens: count,
    totalPaginas: Math.ceil(count / limit),
    paginaAtual: parseInt(page),
    itemsPorPagina: parseInt(limit),
    proximaPagina:
      count > offset + limit
        ? `/postagens?page=${parseInt(page) + 1}&limit=${limit}`
        : null,
    postagens: rows,
  });
};

// RF03 - Buscar Postagem por ID
exports.buscarPostagemPorId = async (req, res) => {
  try {
    const postagem = await Postagem.findByPk(req.params.id);
    if (!postagem) {
      return res.status(404).json({ error: "Postagem não encontrada" });
    }
    res.json(postagem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// RF04 - Atualizar Postagem
exports.atualizarPostagem = async (req, res) => {
try {
const postagem = await Postagem.findByPk(req.params.id);
if (!postagem) {
return res.status(404).json({ error: "Postagem não encontrada" });
}

const postagemValida = postagemSchema.partial().parse(req.body);
await postagem.update(postagemValida);

res.json(postagem);
} catch (error) {
return res.status(400).json({ error: error.errors });
}
};

// RF05 - Excluir Postagem
exports.excluirPostagem = async (req, res) => {
try {
const postagem = await Postagem.findByPk(req.params.id);
if (!postagem) {
return res.status(404).json({ error: "Postagem não encontrada" });
}

await postagem.destroy();
res.status(204).send();
} catch (error) {
res.status(400).json({ error: error.message });
}
};

// RF06 - Upload de Imagem para Postagem
exports.uploadImagem = async (req, res) => {
// Aqui você configuraria o middleware de upload, como o multer,
// para lidar com o upload da imagem e associá-la à postagem.
res
.status(501)
.json({ error: "Funcionalidade de upload de imagem não implementada." });
};
