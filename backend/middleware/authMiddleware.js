const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
const token = req.header('Authorization');
if (!token) return res.status(401).send('Acesso negado.');

try {
const verificado = jwt.verify(token, 'secret');
req.user = verificado;
next();
} catch (err) {
res.status(400).send('Token inválido.');
}
};
