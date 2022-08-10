const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
	user: 'root',
	host: 'localhost',
	password: 'root123',
	database: 'timetable_db',
});

// Ajouter des profs: Par Admin

// Ajouter

app.post('/api/insert', (req, res) => {
	const matricule = req.body.matricule;
	const nom = req.body.nom;
	const email = req.body.email;
	const sqlInsert = 'INSERT INTO profs (matricule, nom, email) VALUES (?,?,?)';

	db.query(sqlInsert, [matricule, nom, email], (err, result) => {
		console.log(result);
	});
});

// Afficher

app.get('/api/get', (req, res) => {
	const sqlSelect = 'SELECT * FROM profs';
	db.query(sqlSelect, (err, result) => {
		res.send(result);
	});
});

// Supprimer

app.delete('/api/delete/:matricule', (req, res) => {
	const name = req.params.matricule;
	const sqlDelete = 'DELETE FROM profs WHERE matricule = ?';

	db.query(sqlDelete, name, (err, result) => {
		if (err) console.log(err);
	});
});

// Following the server Status

app.listen(3001, () => {
	console.log('worked back');
});

// /////////////

// Ajouter des filières: Par Admin
