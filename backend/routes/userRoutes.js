const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/registro', userController.registrar);
router.post('/login', userController.login);
router.put('/:id', userController.atualizarPerfil);
router.get('/', userController.listarUsuarios);

module.exports = router;
