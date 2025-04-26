const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
require('dotenv').config();
const { sequelize } = require('./models');

const utilisateurRoutes = require('./routes/utilisateurRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const commentaireRoutes = require('./routes/commentaireRoutes');

// Middleware pour activer CORS
//app.use(cors());

// Autorise votre front local
app.use(cors({ origin: 'http://localhost:3000' }));  // permet les requêtes depuis votre front :contentReference[oaicite:4]{index=4}
app.use((err, req, res, next) => {
  console.error("Erreur capturée :", err);     // ← log complet de l’erreur :contentReference[oaicite:0]{index=0}
  res.status(500).json({ 
    message: err.message,                     // ← pour voir le message d’erreur précis
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Nos routes…

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
