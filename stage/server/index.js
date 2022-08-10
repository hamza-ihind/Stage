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

// Editer

// Supprimer

app.listen(3001, () => {
	console.log('worked back');
});

// /////////////

// Ajouter des filières: Par Admin
