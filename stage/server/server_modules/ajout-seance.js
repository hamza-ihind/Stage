const handling = (app, db) => {
  // Ajouter
  app.post("/api/insert/seance/non", (req, res) => {
    const id_prof = req.body.prof;
    const id_module = req.body.id_module;
    const nom_filiere = req.body.nomFiliere;
    const niveau = req.body.niveau;
    const semestre = req.body.semestre;
    const idniveau = req.body.idniveau;

    const sqlInsert =
      "INSERT INTO seances (id_prof, id_module,idniveau, nom_filiere, niveau,semestre) VALUES (?,?,?,?,?,?)";

    db.query(
      sqlInsert,
      [id_prof, id_module, idniveau, nom_filiere, niveau, semestre],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(false);
        } else {
          res.send(result);
        }
      }
    );
  });
  app.post("/api/insert/seance/oui", (req, res) => {
    const id_prof = req.body.prof;
    const id_ss_module = req.body.id_ss_module;
    const nom_filiere = req.body.nomFiliere;
    const niveau = req.body.niveau;
    const semestre = req.body.semestre;
    const idniveau = req.body.idniveau;

    const sqlInsert =
      "INSERT INTO seances (id_prof, id_ss_module,idniveau, nom_filiere, niveau,semestre) VALUES (?,?,?,?,?,?)";

    db.query(
      sqlInsert,
      [id_prof, id_ss_module, idniveau, nom_filiere, niveau, semestre],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(false);
        } else {
          res.send(result);
        }
      }
    );
  });

  // Afficher

  app.post("/api/get/seances", (req, res) => {
    const id_prof = req.body.id_prof;

    const sqlSelect = "SELECT * FROM seances WHERE id_prof= ?";
    db.query(sqlSelect, [id_prof], (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
  });
  app.post("/api/get/seance/id", (req, res) => {
    const id = req.body.id;
    const sqlSelect = "SELECT * FROM seances WHERE id= ?";
    db.query(sqlSelect, [id], (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
  });

  app.post("/api/get/seance/idniveau", (req, res) => {
    const id = req.body.id;
    const sqlSelect = "SELECT idniveau FROM seances WHERE id= ?";
    db.query(sqlSelect, [id], (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
  });

  app.post("/api/select/seance/1", (req, res) => {
    const id = req.body.id;
    const sqlSelect = "UPDATE seances SET is_selected = 1 WHERE id= ?";
    db.query(sqlSelect, [id], (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
  });
  app.post("/api/select/seance/0", (req, res) => {
    const id = req.body.id;
    const sqlSelect = "UPDATE seances SET is_selected = 0 WHERE id= ?";
    db.query(sqlSelect, [id], (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
  });

  /* 
    app.post("/api/get/modulebyid", (req, res) => {
      id_module = req.body.id_module;
  
      const sqlSelect = "SELECT * FROM modules WHERE id= ?";
      db.query(sqlSelect, [id_module], (err, result) => {
        if (err) console.log(err);
        res.send(result);
      });
    });
  
    // Supprimer
  
    app.post("/api/delete/module", (req, res) => {
      const id = req.body.id;
      const sqlDelete = "DELETE FROM modules WHERE id = ?";
  
      db.query(sqlDelete, [id], (err, result) => {
        if (err) {
          res.send(false);
        } else {
          res.send(true);
        }
      });
    }); */
};

module.exports = {
  handling,
};
