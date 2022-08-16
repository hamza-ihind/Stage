const handling = (app, db) => {
	// Ajouter
	app.post('/api/insert/module', (req, res) => {
		const nom = req.body.nom;
		const semestre = req.body.semestre;
		const nombreSM = req.body.nombreSM;

		const sqlInsert =
			'INSERT INTO modules (nom, semestre, nmbr_ss_modules, id_niveau) VALUES (?,?,?,?)';

		db.query(sqlInsert, [nom, semestre, nombreSM, id_niveau], (err, result) => {
			if (err) {
				console.log(err);
				res.send(false);
			} else {
				res.send(true);
			}
		});
	});

	// Afficher

	app.get('/api/get/module', (req, res) => {
		const sqlSelect = 'SELECT * FROM modules';
		db.query(sqlSelect, (err, result) => {
			res.send(result);
		});
	});

	// Supprimer

	app.post('/api/delete/module', (req, res) => {
		const id = req.body.id;
		const sqlDelete = 'DELETE FROM modules WHERE id = ?';

		db.query(sqlDelete, [id], (err, result) => {
			if (err) {
				res.send(false);
			} else {
				res.send(true);
			}
		});
	});
};

module.exports = {
	handling,
};
