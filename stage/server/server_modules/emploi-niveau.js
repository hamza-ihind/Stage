const handling = (app, db) => {
  app.post("/api/insert/emploiniveau", (req, res) => {
    const jour = req.body.jour;
    const id_niveau = req.body.id_niveau;
    const seance = req.body.seance;
    const value = req.body.value;
    const sqlInsert =
      "UPDATE emploi_niveaux SET " +
      seance +
      " = ? WHERE id_niveau = ? AND id_jour = ?";
    db.query(sqlInsert, [value, id_niveau, jour], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  app.post("/api/insert/is_niveau_reserved", (req, res) => {
    const seance = req.body.seance;
    const id_niveau = req.body.id_niveau;
    const jour = req.body.jour;

    const query =
      "SELECT " +
      seance +
      " AS id FROM emploi_niveaux WHERE id_niveau= ? AND id_jour= ?";

    db.query(query, [id_niveau, jour], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  /*
   */
  app.post("/api/delete/emploiniveau", (req, res) => {
    const jour = req.body.jour;
    const id_niveau = req.body.id_niveau;
    const seance = req.body.seance;

    const sqlInsert =
      "UPDATE emploi_niveaux SET " +
      seance +
      " = NULL WHERE id_niveau= ? AND id_jour= ?";

    db.query(sqlInsert, [id_niveau, jour], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  /*
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
  }); */
};

module.exports = {
  handling,
};
