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
