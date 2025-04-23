const express = require('express');
const router = express.Router();
const ticketController = require('../Controllers/ticketController');

router.post('/', ticketController.creerTicket);
router.get('/', ticketController.getTickets);
router.put('/:id', ticketController.mettreAJourTicket);
router.delete('/:id', ticketController.supprimerTicket);
router.get('/:id', ticketController.getTicketById); // Ajout de la route pour récupérer un ticket par ID
router.get('/employe/:id_employe', ticketController.getTicketsByEmploye); // Récupérer les tickets par employé

module.exports = router;
