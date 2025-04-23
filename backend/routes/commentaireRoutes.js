const express = require('express');
const router = express.Router();
const commentaireController = require('../Controllers/commentaireController');

router.post('/', commentaireController.ajouterCommentaire);
router.get('/', commentaireController.getCommentaires);
router.put('/:id', commentaireController.mettreAJourCommentaire);
router.delete('/:id', commentaireController.supprimerCommentaire);
router.get('/ticket/:ticket_id', commentaireController.getCommentairesParTicket);
router.get('/utilisateur/:auteur_id', commentaireController.getCommentairesParUtilisateur);
module.exports = router;
