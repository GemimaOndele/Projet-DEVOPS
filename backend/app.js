const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models');

const utilisateurRoutes = require('./routes/utilisateurRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const commentaireRoutes = require('./routes/commentaireRoutes');

const app = express();

// Middleware pour activer CORS
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/utilisateurs', utilisateurRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/commentaires', commentaireRoutes);

// Route de test pour vérifier si l'API fonctionne
app.get('/', (req, res) => {
  res.send('API Support IT Fonctionnelle 🚀');
});

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);  // Affiche l'erreur dans la console
  res.status(500).json({ message: 'Quelque chose a mal tourné !' }); // Retourne une erreur générique
});

// Mauvais : n’écoute que localhost
app.listen(4000, 'localhost', () => {
  console.log('Backend démarré sur http://localhost:4000');
});

// Bon : écoute sur toutes les interfaces
app.listen(4000, '0.0.0.0', () => {
  console.log('Backend démarré sur http://0.0.0.0:4000');
});

module.exports = app;
