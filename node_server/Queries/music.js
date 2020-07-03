const db = require("../config/mysql");
// const toUnnamed = require("named-placeholders")();

const getMusic = (req, res) => {
	
	db.query('SELECT * FROM music', (err, result) => {
		res.json(result);
	});
};

module.exports = {
	getMusic
}