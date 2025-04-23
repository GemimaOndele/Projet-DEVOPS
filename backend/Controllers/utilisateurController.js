const { Utilisateur } = require('../models');

exports.creerUtilisateur = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.create(req.body);
    res.status(201).json(utilisateur);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUtilisateurs = async (req, res) => {
  const utilisateurs = await Utilisateur.findAll();
  res.json(utilisateurs);
};

exports.mettreAJourUtilisateur = async (req, res) => {
  try {
    const { id } = req.params;
    await Utilisateur.update(req.body, {
      where: { id }
    });
    res.json({ message: 'Utilisateur mis à jour' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

exports.supprimerUtilisateur = async (req, res) => {
  try {
    const { id } = req.params;
    await Utilisateur.destroy({
      where: { id }
    });
    res.json({ message: 'Utilisateur supprimé' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUtilisateursParRole = async (req, res) => {
  try {
    const { role } = req.params;
    const utilisateurs = await Utilisateur.findAll({
      where: { role }
    });
    res.json(utilisateurs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

