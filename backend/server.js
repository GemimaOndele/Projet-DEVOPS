const app = require('./app');
const { sequelize } = require('./models');

//const PORT = process.env.PORT || 3000;

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false }) // force: true => recrée les tables à chaque lancement
  .then(() => {
    console.log('🗃️  Base de données synchronisée');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Serveur lancé sur http://0.0.0.0:${PORT}`);
      //console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    // Gestion améliorée des erreurs
    console.error('❌ Erreur de connexion à la base de données:', err.message);
    if (err.name === 'SequelizeConnectionError') {
      console.error('⚠️ Problème de connexion à la base de données. Assurez-vous que la base de données est en ligne et que les informations de connexion sont correctes.');
    } else {
      console.error('⚠️ Une autre erreur est survenue :', err);
    }
    process.exit(1); // Arrête l'application si la connexion échoue
  });
