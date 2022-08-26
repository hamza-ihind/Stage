const handling = (app, db) => {
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
};
module.exports = {
  handling,
};
