const handling = (app, db) => {
	app.get('/api/get/niveau', (req, res) => {
		const sqlSelect = 'SELECT * FROM niveaux';
		db.query(sqlSelect, (err, result) => {
			if (err) console.log(err);
			res.send(result);
		});
	});
};

module.exports = {
	handling,
};
