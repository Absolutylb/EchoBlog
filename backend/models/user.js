const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
nome: { type: DataTypes.STRING, allowNull: false },
email: { type: DataTypes.STRING, allowNull: false, unique: true },
senha: { type: DataTypes.STRING, allowNull: false },
papel: { type: DataTypes.ENUM('administrador', 'autor', 'leitor'), defaultValue: 'leitor' }
});

module.exports = User;
