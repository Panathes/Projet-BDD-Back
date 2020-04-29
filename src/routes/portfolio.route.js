const sql = require("../db/db.js")

module.exports = app => {
    const infos = require("../controllers/infos.controller.js")
    const contact = require("../controllers/contact.controller.js")
    const recipe = require("../db/recipe.json")

    // app.post("/contact", contact.create);

    // Route without Controller, Model
    app.post("/contact", function(req, res) {
        let contact_id = req.body.contact_id
        let firstname = req.body.firstname
        let lastname = req.body.lastname
        let message= req.body.message
        let email= req.body.email

        console.log(contact_id)
        console.log(firstname)

        if (err) {
            console.log(err)
          }

        if(contact_id === null) {
            sql.run('INSERT INTO contact VALUES(?,?,?,?,?)', contact_id, firstname, lastname, message, email, function(err, row){
                if (err) {
                    console.log(err)
                  } else {
                    res.send('Success')
                  }
            })
        }
    })

    app.get("/infos", infos.findAll);

    app.get("/recipe", function(req, res){
        res.json(recipe);
    })
};