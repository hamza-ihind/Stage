const handling = (app, db) => {
	// Ajouter
	app.post('/api/insert/module/non', (req, res) => {
		const nom = req.body.nomModule;
		const semestre = req.body.semestre;
		const nombreSM = 0;
		const id_niveau = req.body.idniveau;
		const id_prof = req.body.prof;
		// const nmbr_semaines = req.body.nmbr_semaines;
		const sqlInsert =
			'INSERT INTO modules (nom, semestre, nmbr_ss_modules, id_niveau, id_prof, nmbr_semaines) VALUES (?,?,?,?,?,?)';

		db.query(
			sqlInsert,
			[nom, semestre, nombreSM, id_niveau, id_prof, 0],
			(err, result) => {
				if (err) {
					console.log(err);
					res.send(false);
				} else {
					res.send(true);
				}
			},
		);
	});
	app.post('/api/insert/module/oui', (req, res) => {
		const nom = req.body.nomModule;
		const semestre = req.body.semestre;
		const nombreSM = 0;
		const id_niveau = req.body.idniveau;
		const sqlInsert =
			'INSERT INTO modules (nom, semestre, nmbr_ss_modules, id_niveau) VALUES (?,?,?,?)';

		db.query(sqlInsert, [nom, semestre, nombreSM, id_niveau], (err, result) => {
			if (err) {
				console.log(err);
				res.send(false);
			} else {
				res.send(result);
			}
		});
	});

	// Afficher

	app.post('/api/get/module', (req, res) => {
		id_niveau = req.body.idniveau;

		const sqlSelect = 'SELECT * FROM modules WHERE id_niveau= ?';
		db.query(sqlSelect, [id_niveau], (err, result) => {
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
