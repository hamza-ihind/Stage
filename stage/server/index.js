const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

//

const db = mysql.createConnection({
	user: 'E11even',
	host: 'localhost',
	password: 'Algohamza2003',
	database: 'timetable_db',
});

//

app.post('/create', (req, res) => {
	const matricule = req.body.matricule;
	const nom = req.body.nom;
	const email = req.body.email;

	db.query(
		'INSERT INTO profs (matricule, nom, email) VALUES (?,?,?)',
		[matricule, nom, email],
		(err, result) => {
			if (err) {
				console.error(err + ' il faut que tu fixe ton problème');
			} else {
				res.send(result);
			}
		},
	);
});

//

app.get('/profs', (req, res) => {
	db.query('SELECT * FROM profs', (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	});
});

app.listen(3001, () => {
	console.log('working');
});
