const express = require("express");
const router = express.Router();
const postagemController = require("../controllers/postagemController");

// RF01 - Criar Postagem
router.post("/", postagemController.criarPostagem);

// RF02 - Listar Postagens
router.get("/", postagemController.listarPostagens);

// RF03 - Buscar Postagem por ID
router.get("/:id", postagemController.buscarPostagemPorId);

// RF04 - Atualizar Postagem
router.put("/:id", postagemController.atualizarPostagem);

// RF05 - Excluir Postagem
router.delete("/:id", postagemController.excluirPostagem);

// RF06 - Upload de Imagem para Postagem
router.post("/:id/imagem", postagemController.uploadImagem);

module.exports = router;
