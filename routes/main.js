const express = require('express');
const router = express.Router();

const { login, dashboard} = require('../controllers/main');
const authonticationMiddleware = require('../middleware/auth');

router.route('/dashboard').get(authonticationMiddleware,dashboard);
router.route('/login').post(login);

module.exports = router;