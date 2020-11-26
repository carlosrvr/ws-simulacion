const express = require('express');
const router = express.Router();
const {token, invoice} = require('../controllers/service');
router.post("/token-auth-clients/", token);
router.post("/invoice", invoice);

module.exports = router;