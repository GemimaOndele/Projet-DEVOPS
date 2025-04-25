const { Sequelize } = require('sequelize');
require('dotenv').config();

// Vérifie que la variable d'environnement DB_STORAGE est définie
if (!process.env.DB_STORAGE) {
  console.error('❌ La variable d\'environnement DB_STORAGE est manquante.');
  process.exit(1); // Quitte le processus si la configuration est incorrecte
}

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_STORAGE,
  logging: false, // Désactive les logs SQL si tu ne veux pas les afficher dans la console
});

module.exports = sequelize;
