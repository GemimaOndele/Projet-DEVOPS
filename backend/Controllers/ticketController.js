

const { Ticket } = require('../models');

exports.creerTicket = async (req, res) => {
  try {
    const { titre, description, statut, priorité, id_employe, id_technicien } = req.body;

    // Vérification basique de l'existence des champs requis
    if (!titre || !description) {
      return res.status(400).json({ error: 'Titre et description sont obligatoires.' });
    }

    // Création du ticket
    const ticket = await Ticket.create({
      titre,
      description,
      statut,
      priorité,
      id_employe,
      id_technicien,
      date_creation: new Date().toISOString(),
      date_mise_a_jour: new Date().toISOString()
    });

    return res.status(201).json(ticket);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erreur lors de la création du ticket.' });
  }
};


exports.getTickets = async (req, res) => {
  const tickets = await Ticket.findAll({
    include: ['employe', 'technicien', 'commentaires']
  });
  res.json(tickets);
};

exports.mettreAJourTicket = async (req, res) => {
  try {
    const { id } = req.params;
    await Ticket.update(req.body, {
      where: { id }
    });
    res.json({ message: 'Ticket mis à jour' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.supprimerTicket = async (req, res) => {
  try {
    const { id } = req.params;
    await Ticket.destroy({
      where: { id }
    });
    res.json({ message: 'Ticket supprimé' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTicketsParEmploye = async (req, res) => {
  try {
    const { id_employe } = req.params;
    const tickets = await Ticket.findAll({
      where: { id_employe },
      include: ['employe', 'technicien', 'commentaires']
    });
    res.json(tickets);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
