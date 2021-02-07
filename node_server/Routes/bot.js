const express = require("express");
const router = express.Router();
const queries = require("../Queries/bot");

router.get('/', queries.startBot);

module.exports = router;