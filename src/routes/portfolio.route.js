module.exports = app => {
    const infos = require("../controllers/infos.controller.js")
    const contact = require("../controllers/contact.controller.js")
    const recipe = require("../db/recipe.json")

    app.post("/contact", contact.create);

    app.get("/infos", infos.findAll);

    app.get("/recipe", function(req, res){
        res.json(recipe);
    })
};