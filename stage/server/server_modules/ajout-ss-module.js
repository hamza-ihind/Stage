const handling = (app, db) => {
	// Ajouter
	app.post('/api/insert/ss_module', (req, res) => {
		const nom = req.body.nom;
		const nombreSemaines = req.body.nombreSemaines;
		const id_module = req.body.id_module;

		const sqlInsert =
			'INSERT INTO sous_modules (nom, nmbr_semaines, id_module) VALUES (?,?,?)';

		db.query(sqlInsert, [nom, nombreSemaines, id_module], (err, result) => {
			if (err) {
				console.log(err);
				res.send(false);
			} else {
				res.send(true);
			}
		});
	});

	// Afficher

	app.get('/api/get/ss_module', (req, res) => {
		const sqlSelect = 'SELECT * FROM sous_modules';
		db.query(sqlSelect, (err, result) => {
			res.send(result);
		});
	});

	// Supprimer

	app.post('/api/delete/ss_module', (req, res) => {
		const id = req.body.id;
		const sqlDelete = 'DELETE FROM sous_modules WHERE id = ?';

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
