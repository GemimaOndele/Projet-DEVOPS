const { Commentaire } = require('../models');

exports.ajouterCommentaire = async (req, res) => {
  try {
    const commentaire = await Commentaire.create(req.body);
    res.status(201).json(commentaire);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCommentaires = async (req, res) => {
  const commentaires = await Commentaire.findAll();
  res.json(commentaires);
};

exports.mettreAJourCommentaire = async (req, res) => {
  try {
    const { id } = req.params;
    await Commentaire.update(req.body, {
      where: { id }
    });
    res.json({ message: 'Commentaire mis à jour' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
exports.supprimerCommentaire = async (req, res) => {
  try {
    const { id } = req.params;
    await Commentaire.destroy({
      where: { id }
    });
    res.json({ message: 'Commentaire supprimé' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCommentairesParTicket = async (req, res) => {
  try {
    const { ticket_id } = req.params;
    const commentaires = await Commentaire.findAll({
      where: { ticket_id },
      include: ['auteur']
    });
    res.json(commentaires);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCommentairesParUtilisateur = async (req, res) => {
  try {
    const { auteur_id } = req.params;
    const commentaires = await Commentaire.findAll({
      where: { auteur_id },
      include: ['ticket']
    });
    res.json(commentaires);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

