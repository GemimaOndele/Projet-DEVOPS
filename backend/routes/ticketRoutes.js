const express = require('express');
const router = express.Router();
const ticketController = require('../Controllers/ticketController');

router.post('/', ticketController.creerTicket);
router.get('/', ticketController.getTickets);
router.put('/:id', ticketController.mettreAJourTicket);

module.exports = router;
