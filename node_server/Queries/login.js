const db = require("../config/database");
const toUnnamed = require("named-placeholders")();


const loginUser = (req, res) => {
    const { user, password } = req.query;

    res.json()
}


module.exports = {
    loginUser
}
