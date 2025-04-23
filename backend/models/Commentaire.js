const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Commentaire = sequelize.define('Commentaire', {
  commentaire: { type: DataTypes.TEXT, allowNull: false },
  date_commentaire: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Commentaire;
