const express = require("express");
const router = express.Router();
const comentarioController = require("../backend/controllers/comentarioController");

// Criar Comentário
router.post("/:postagemId/comentarios", comentarioController.criarComentario);

// Listar Comentários
router.get("/:postagemId/comentarios", comentarioController.listarComentarios);

module.exports = router;
