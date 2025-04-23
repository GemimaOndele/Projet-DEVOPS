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
