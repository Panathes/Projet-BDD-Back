const sql = require("../db/db.js")

const Infos = function(infos) {
    this.info_id = infos.info_id;
    this.title = infos.title;
    this.subtitle = infos.subtitle;
    this.paragraph = infos.paragraph;
}

Infos.getAll = result => {
    sql.all('SELECT * FROM info', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
          console.log("Infos: ", res);
          result(null, res);
    })
}

module.exports = Infos;