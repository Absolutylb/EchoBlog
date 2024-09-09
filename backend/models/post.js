const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Post = sequelize.define('Post', {
titulo: { type: DataTypes.STRING, allowNull: false },
conteudo: { type: DataTypes.TEXT, allowNull: false },
dataPublicacao: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
autor: { type: DataTypes.STRING, allowNull: false },
imagem: { type: DataTypes.STRING }
});

module.exports = Post;
