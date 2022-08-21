const handling = (app, db) => {
	app.post('/api/insert/prof', (req, res) => {
		const matricule = req.body.matricule;
		const nom = req.body.nom;
		const email = req.body.email;

		const sqlInsert =
			'INSERT INTO profs (matricule, nom, email, password) VALUES (?,?,?, matricule)';

		db.query(sqlInsert, [matricule, nom, email], (err, result) => {
			if (err) {
				res.send(false);
			} else {
				res.send(true);
			}
		});
	});

	app.get('/api/get/prof', (req, res) => {
		const sqlSelect = 'SELECT * FROM profs';
		db.query(sqlSelect, (err, result) => {
			res.send(result);
		});
	});

	app.post('/api/delete/prof', (req, res) => {
		const matricule = req.body.matricule;
		const sqlDelete = 'DELETE FROM profs WHERE matricule = ?';

		db.query(sqlDelete, [matricule], (err, result) => {
			if (err) {
				res.send(false);
			} else {
				res.send(true);
			}
		});
	});

	app.put('/api/update/prof', (req, res) => {
		const password = req.body.password;
		const sqlUpdate = 'UPDATE profs SET password = ? where matricule = ?';

		db.query(sqlUpdate, [password, id], (err, result) => {
			if (err) console.log(err);
		});
	});
};
module.exports = {
	handling,
};
