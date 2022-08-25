const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const dbconfig = require('./dbconfig.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const data = {};

// Modules
const addProf = require('./server_modules/ajout-prof.js');
const addFiliere = require('./server_modules/ajout-filiere.js');
const niveaux = require('./server_modules/niveaux.js');
const modules = require('./server_modules/ajout-module.js');
const ssmodules = require('./server_modules/ajout-ss-module.js');
const authProf = require('./server_modules/auth-prof.js');
const authAdmin = require('./server_modules/auth-admin.js');
const seances = require('./server_modules/ajout-seance');

const db = mysql.createPool({
	user: dbconfig.USER,
	host: dbconfig.HOST,
	password: dbconfig.PASSWORD,
	database: 'timetable_db',
});

app.post('/api/data', (req, res) => {
	Object.assign(data, req.body);
});

app.get('/api/data', (req, res) => {
	res.send(data);
});

app.listen(3001, () => {
	console.log('server is running on port 3001...');
});

addProf.handling(app, db);
addFiliere.handling(app, db);
niveaux.handling(app, db);
modules.handling(app, db);
ssmodules.handling(app, db);
authProf.handling(app, db);
authAdmin.handling(app, db);
seances.handling(app, db);
