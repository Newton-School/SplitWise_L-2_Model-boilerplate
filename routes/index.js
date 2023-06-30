const router = require('express').Router();

router.use('/auth', require('./authRoutes'));
router.use('/group', require('./groupRoutes'));

module.exports = router;
