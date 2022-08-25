const handling = (app, db) => {
  app.post("/api/login/prof", (req, res) => {
    const nom = req.body.nom;
    const password = req.body.password;

    db.query(
      "SELECT * FROM profs WHERE nom = ? AND password = ?",
      [nom, password],
      (err, result) => {
        if (err) console.log(err);
        if (result) res.send(result);
      }
    );
  });

  app.post("/api/update/prof", (req, res) => {
    const id = req.body.id_prof;
    const password = req.body.newPassword1;

    const sqlUpdate = "UPDATE profs SET password = ? where matricule = ?";

    db.query(sqlUpdate, [password, id], (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
  });
};

module.exports = {
  handling,
};
