module.exports = app => {
    const infos = require("../controllers/infos.controller.js")

    app.get("/infos", infos.findAll);
};