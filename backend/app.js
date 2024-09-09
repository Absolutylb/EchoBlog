const express = require("express");
const app = express();
const postagemRoutes = require("./backend/routes/postagens");

// Middleware para parsing de JSON
app.use(express.json());

// Rotas de postagens
app.use("/postagens", postagemRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});
const comentarioRoutes = require("./routes/comentarios");
app.use("/postagens", comentarioRoutes);
