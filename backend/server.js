const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }) // force: true => recrée les tables à chaque lancement
  .then(() => {
    console.log('🗃️  Base de données synchronisée');
    app.listen(PORT, () => {
      console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erreur de connexion à la base de données:', err);
  });
