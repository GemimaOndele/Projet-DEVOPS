const express = require('express');
const router = express.Router();
const utilisateurController = require('../Controllers/utilisateurController.js');

router.post('/', utilisateurController.creerUtilisateur);
router.get('/', utilisateurController.getUtilisateurs);
router.put('/:id', utilisateurController.mettreAJourUtilisateur);
router.delete('/:id', utilisateurController.supprimerUtilisateur);
router.get('/role/:role', utilisateurController.getUtilisateursParRole); // Récupérer les utilisateurs par rôle

module.exports = router;
