const { Comentario, Postagem } = require("../../models");

// Criar Comentário
exports.criarComentario = async (req, res) => {
  try {
    const postagem = await Postagem.findByPk(req.params.postagemId);
    if (!postagem) {
      return res.status(404).json({ error: "Postagem não encontrada" });
    }

    const comentario = await Comentario.create({
      conteudo: req.body.conteudo,
      autor: req.body.autor,
      postagemId: req.params.postagemId,
    });

    res.status(201).json(comentario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar Comentários
exports.listarComentarios = async (req, res) => {
  try {
    const postagem = await Postagem.findByPk(req.params.postagemId, {
      include: { model: Comentario, as: "comentarios" },
    });

    if (!postagem) {
      return res.status(404).json({ error: "Postagem não encontrada" });
    }

    res.json(postagem.comentarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
