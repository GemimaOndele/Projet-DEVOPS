const express = require('express');
const router = express.Router();
const commentaireController = require('../Controllers/commentaireController');

router.post('/', commentaireController.ajouterCommentaire);
router.get('/', commentaireController.getCommentaires);

module.exports = router;
