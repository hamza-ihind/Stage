const handling = (app, db) => {
	app.post('/api/login/admin', (req, res) => {
		const nom = req.body.nom;
		const password = req.body.password;

		db.query(
			'SELECT * FROM admin WHERE nom = ? AND password = ?',
			[nom, password],
			(err, result) => {
				if (err) console.log(err);
				if (result) res.send(result);
			},
		);
	});

	app.get('/api/get/admin', (req, res) => {
		const sqlSelect = 'SELECT * FROM admin';
		db.query(sqlSelect, (err, result) => {
			res.send(result);
		});
	});

	app.put('/api/update/admin', (req, res) => {
		const nom = req.body.nom;
		const password = req.body.password;

		const sqlUpdate = 'UPDATE admin SET password = ? where nom = ?';

		db.query(sqlUpdate, [password, nom], (err, result) => {
			if (err) console.log(err);
		});
	});
};

module.exports = {
	handling,
};
