const Contact = require("../models/contact.model")

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const contact = new Contact({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      message: req.body.message,
      email: req.body.email
    });
  
    // Save Customer in the database
    Contact.create(contact, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };