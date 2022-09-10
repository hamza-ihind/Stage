const handling = (app, db) => {
  app.post("/api/initialisation/emploiprof", (req, res) => {
    const id_prof = req.body.id_prof;
    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const sqlInsert = "INSERT INTO emploi_profs (id_prof,id_jour) VALUES (?,?)";
    days.forEach((day) => {
      db.query(sqlInsert, [id_prof, day], (err, result) => {
        if (err) {
          console.log(err, "///////////////////////////////////// " + day);
        }
      });
    });
  });
  app.post("/api/insert/emploiprof", (req, res) => {
    const jour = req.body.jour;
    const id_prof = req.body.idProf;
    const seance = req.body.seance;
    const value = req.body.value;
    const sqlInsert =
      "UPDATE emploi_profs SET " +
      seance +
      " = ? WHERE id_prof = ? AND id_jour = ?";
    db.query(sqlInsert, [value, id_prof, jour], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  app.post("/api/insert/is_seance_selected", (req, res) => {
    const id_seance = req.body.id_seance;
    const id_prof = req.body.id_prof;

    const sqlInsert =
      "SELECT * FROM emploi_profs WHERE id_prof= ? AND (seance1= ? OR seance2= ? OR seance3= ? OR seance4= ?)";

    db.query(
      sqlInsert,
      [id_prof, id_seance, id_seance, id_seance, id_seance],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
  app.post("/api/delete/emploiprof", (req, res) => {
    const jour = req.body.jour;
    const id_prof = req.body.idProf;
    const seance = req.body.seance;

    const sqlInsert =
      "UPDATE emploi_profs SET " +
      seance +
      " = NULL WHERE id_prof= ? AND id_jour= ?";

    db.query(sqlInsert, [id_prof, jour], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  //get seance by prof+horaire+jour
  app.post("/api/get/emploiprof/seance", (req, res) => {
    const seance = req.body.seance;
    const id_prof = req.body.id_prof;
    const jour = req.body.jour;

    const sqlInsert =
      "SELECT " +
      seance +
      " as id FROM emploi_profs WHERE id_prof= ? AND id_jour = ?";

    db.query(sqlInsert, [id_prof, jour], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
};

module.exports = {
  handling,
};
