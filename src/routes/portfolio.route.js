module.exports = app => {
    const infos = require("../controllers/infos.controller.js")
    const contact = require("../controllers/contact.controller.js")

    app.post("/contact", contact.create);

    app.get("/infos", infos.findAll);
};