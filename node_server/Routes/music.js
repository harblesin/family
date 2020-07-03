const express = require("express");
const router = express.Router();
const queries = require("../Queries/music");

router.get('/', queries.getMusic);

module.exports = router;