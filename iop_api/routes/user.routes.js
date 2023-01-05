const express = require('express');
const router = express.Router();

const user_Controller = require('../controllers/user.controller');
router.get('/validate', user_Controller.validation);



module.exports = router;