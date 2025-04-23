const express = require('express');
const router = express.Router();
const utilisateurController = require('../Controllers/utilisateurController.js');

router.post('/', utilisateurController.creerUtilisateur);
router.get('/', utilisateurController.getUtilisateurs);

module.exports = router;
