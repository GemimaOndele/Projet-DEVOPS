const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Ticket = sequelize.define('Ticket', {
  titre: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  statut: {
    type: DataTypes.ENUM('Ouvert', 'En cours', 'Résolu', 'Fermé'),
    allowNull: false,
    defaultValue: 'Ouvert'
  },
  priorité: {
    type: DataTypes.ENUM('Faible', 'Moyenne', 'Élevée', 'Critique'),
    allowNull: false,
    defaultValue: 'Moyenne'
  },
  date_creation: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  date_mise_a_jour: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Ticket;
