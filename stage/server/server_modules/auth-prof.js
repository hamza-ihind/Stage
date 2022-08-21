const handling = (app, db) => {
	app.post('/api/login', (req, res) => {
		const nom = req.body.nom;
		const password = req.body.password;

		db.query(
			'SELECT * FROM profs WHERE nom = ? AND password = ?',
			[nom, password],
			(err, result) => {
				if (err) console.log(err);
				if (result) res.send(result);
				else res.send({ message: "n'existe pas" });
			},
		);
	});
};

module.exports = {
	handling,
};
