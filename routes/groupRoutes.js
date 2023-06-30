const express = require('express');

const { getAllGroups } = require('../controllers/groupControllers');

const router = express.Router();

router.get('/', getAllGroups);

module.exports = router;
