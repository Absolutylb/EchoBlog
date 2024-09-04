module.exports = (sequelize, DataTypes) => {
const Postagem = sequelize.define('Postagem', {
titulo: {
type: DataTypes.STRING,
allowNull: false,
},
conteudo: {
type: DataTypes.TEXT,
allowNull: false,
},
dataPublicacao: {
type: DataTypes.DATE,
defaultValue: DataTypes.NOW,
},
autor: {
type: DataTypes.STRING,
allowNull: false,
},
imagem: {
type: DataTypes.STRING,
allowNull: true,
},
}, {});

return Postagem;
};

Postagem.hasMany(models.Comentario, { foreignKey: 'postagemId', as: 'comentarios' });
