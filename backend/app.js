const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models');

const utilisateurRoutes = require('./routes/utilisateurRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const commentaireRoutes = require('./routes/commentaireRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/utilisateurs', utilisateurRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/commentaires', commentaireRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API Support IT Fonctionnelle 🚀');
});

module.exports = app;
