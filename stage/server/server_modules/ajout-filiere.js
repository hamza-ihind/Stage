const handling = (app, db) => {
  // Ajouter

  app.post("/api/insert/filiere", (req, res) => {
    const nom = req.body.nom;
    const nombreNiveau = req.body.nombreNiveau;

    const sqlInsert = "INSERT INTO filieres (nom, nmbr_niveaux) VALUES (?,?)";

    db.query(sqlInsert, [nom, nombreNiveau], (err, result) => {
      if (err) {
        res.send(false);
      } else {
        res.send(true);
        for (let i = 0; i < nombreNiveau; i++) {
          const query =
            "INSERT INTO niveaux (id_filiere, ordonnancement) VALUES (?,?)";
          db.query(query, [result.insertId, i + 1], (err, res) => {
            if (err) console.log(err);
            else {
              const days = [
                "Lundi",
                "Mardi",
                "Mercredi",
                "Jeudi",
                "Vendredi",
                "Samedi",
              ];
              days.forEach((day) => {
                db.query(
                  "INSERT INTO emploi_niveaux (id_niveau,id_jour) VALUES (?,?)",
                  [res.insertId, day],
                  (err, res) => {
                    if (err) console.log(err);
                  }
                );
              });
            }
          });
        }
      }
    });
  });

  // Afficher

  app.get("/api/get/filiere", (req, res) => {
    const sqlSelect = "SELECT * FROM filieres";
    db.query(sqlSelect, (err, result) => {
      res.send(result);
    });
  });

  // Supprimer

  app.post("/api/delete/filiere", (req, res) => {
    const id = req.body.id;
    const sqlDelete = "DELETE FROM filieres WHERE id = ?";

    db.query(sqlDelete, [id], (err, result) => {
      if (err) {
        res.send(false);
      } else {
        res.send(true);
      }
    });
  });
};

module.exports = {
  handling,
};
