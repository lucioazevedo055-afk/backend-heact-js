const { DataTypes } = require('sequelize');
const sequelize = require('../confg/database');

const Cidade = sequelize.define('Cidade', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uf: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Cidade'
});

module.exports = Cidade;