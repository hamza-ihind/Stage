const handling = (app, db) => {
	app.get('/api/get/jours', (req, res) => {
		const sqlSelect = 'SELECT * FROM jours';
		db.query(sqlSelect, (err, result) => {
			if (err) console.log(err);
			res.send(result);
		});
	});
};

module.exports = {
	handling,
};
