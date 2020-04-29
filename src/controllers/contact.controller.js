const Contact = require("../models/contact.model")

exports.create = (req, res) => {
    console.log(req.body)

    if (!req.body) {
      res.status(400).send({
        message: "No contact create"
      });
    }
  
    const contact = new Contact({
      contact_id: req.body.contact_id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      message: req.body.message,
      email: req.body.email
    });
  
    Contact.create(contact, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };