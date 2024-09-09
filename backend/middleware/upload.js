const multer = require('multer');
const path = require('path');

// Configuração do multer
const storage = multer.diskStorage({
destination: (req, file, cb) => {
cb(null, 'uploads/'); // Diretório onde as imagens serão salvas
},
filename: (req, file, cb) => {
cb(null, Date.now() + path.extname(file.originalname)); // Nome do arquivo salvo
}
});

// Filtrar tipos de arquivo
const fileFilter = (req, file, cb) => {
const filetypes = /jpeg|jpg|png/;
const mimetype = filetypes.test(file.mimetype);
const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

if (mimetype && extname) {
return cb(null, true);
} else {
cb(new Error("Erro: Apenas imagens nos formatos JPEG, JPG e PNG são permitidas!"));
}
};

const upload = multer({
storage: storage,
limits: { fileSize: 1024 * 1024 * 5 }, // Limite de 5MB
fileFilter: fileFilter
});

module.exports = upload;
