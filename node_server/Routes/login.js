const router = require("express").Router();
const queries = require("../queries/login");


router.get("/", queries.loginUser);


module.exports = router;