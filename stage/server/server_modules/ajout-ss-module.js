const handling = (app, db) => {
  // Ajouter
  app.post("/api/insert/ss_module", (req, res) => {
    const nom = req.body.nom;
    const nmbr_semaines = req.body.nombreSemaines;
    const id_module = req.body.id;
    const id_prof = req.body.prof;

    const sqlInsert =
      "INSERT INTO ss_modules (nom, nmbr_semaines, id_module, id_prof) VALUES (?,?,?,?)";

    db.query(
      sqlInsert,
      [nom, nmbr_semaines, id_module, id_prof, id_module],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(false);
        } else {
          res.send(result);
        }
      }
    );
    db.query(
      " Update modules Set nmbr_ss_modules = nmbr_ss_modules + 1 WHERE id=?",
      [id_module],
      (err, result) => {
        if (err) console.log(err);
      }
    );
  });

  // Afficher

  app.post("/api/get/ss_module", (req, res) => {
    const id_module = req.body.id;
    const sqlSelect = "SELECT * FROM ss_modules WHERE id_module=?";
    db.query(sqlSelect, [id_module], (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
  });
  app.post("/api/get/ss_modulebyid", (req, res) => {
    const id_ss_module = req.body.id_ss_module;
    const sqlSelect = "SELECT * FROM ss_modules WHERE id=?";
    db.query(sqlSelect, [id_ss_module], (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
  });

  // Supprimer

  app.post("/api/delete/ss_module", (req, res) => {
    const id = req.body.id_ss_module;
    const id_module = req.body.id_module;
    const sqlDelete = "DELETE FROM ss_modules WHERE id = ?";

    db.query(sqlDelete, [id], (err, result) => {
      if (err) {
        console.log(err);
        res.send(false);
      } else {
        res.send(true);
      }
    });
    db.query(
      " Update modules Set nmbr_ss_modules = nmbr_ss_modules - 1 WHERE id=?",
      [id_module],
      (err, result) => {
        if (err) console.log(err);
      }
    );
  });
};

module.exports = {
  handling,
};
