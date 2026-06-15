const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

router.post('/', agendamentoController.agendar);

module.exports = router;