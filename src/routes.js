const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');

const router = Router();

router.get('/', ContactController.index);
router.get('/contacts/:id', ContactController.show);

module.exports = router;
