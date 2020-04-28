const Infos = require("../models/infos.model")

exports.findAll = (req, res) => {
    Infos.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving infos."
        });
      else res.send(data);
    });
  };