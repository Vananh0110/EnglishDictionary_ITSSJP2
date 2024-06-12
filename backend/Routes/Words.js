const express = require('express');
const router = express.Router();

const WordsController = require('../App/Controllers/WordsController')

router.get('/:slug', WordsController.show);
router.get('/', WordsController.index);

module.exports = router;