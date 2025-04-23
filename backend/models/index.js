const sequelize = require('../config/db');
const Utilisateur = require('./Utilisateur');
const Ticket = require('./Ticket');
const Commentaire = require('./Commentaire');

// Relations
Utilisateur.hasMany(Ticket, { foreignKey: 'id_employe', as: 'tickets_crees' });
Utilisateur.hasMany(Ticket, { foreignKey: 'id_technicien', as: 'tickets_assignes' });
Ticket.belongsTo(Utilisateur, { foreignKey: 'id_employe', as: 'employe' });
Ticket.belongsTo(Utilisateur, { foreignKey: 'id_technicien', as: 'technicien' });

Ticket.hasMany(Commentaire, { foreignKey: 'ticket_id', as: 'commentaires' });
Commentaire.belongsTo(Ticket, { foreignKey: 'ticket_id' });

Utilisateur.hasMany(Commentaire, { foreignKey: 'auteur_id', as: 'commentaires' });
Commentaire.belongsTo(Utilisateur, { foreignKey: 'auteur_id', as: 'auteur' });

module.exports = { sequelize, Utilisateur, Ticket, Commentaire };
