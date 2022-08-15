const handling = (app, db) => {
	app.get('/api/get/niveau', (req, res) => {
		id = req.query.id_filiere;
		const sqlSelect = 'SELECT * FROM niveaux where id_filiere = ?';
		db.query(sqlSelect, [id], (err, result) => {
			if (err) console.log(err);
			res.send(result);
		});
	});
};

module.exports = {
	handling,
};
