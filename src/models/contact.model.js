const sql = require("../db/db.js")

const Contact = function(contact) {
    this.contact_id = contact.contact_id;
    this.firstname = contact.firstname;
    this.lastname = contact.lastname;
    this.message = contact.message;
    this.email = contact.email;
}

Contact.create = (newContact, result) => {

  sql.run(`INSERT INTO contact(firstname, lastname, message, email) VALUES(?,?,?,?)`, (newContact.firstname, newContact.lastname, newContact.message, newContact.email), function(err, row) {
    console.log(newContact)
    console.log(row)
    if (err) {
      return console.log(err.message);
    }
    console.log(result);
  });
    // sql.run("INSERT INTO customers SET ?", newContact, (err, res) => {
    //   if (err) {
    //     console.log("error: ", err);
    //     result(err, null);
    //     return;
    //   }
    //   console.log("created customer: ", { id: res.insertId, ...newContact });
    //   result(null, { id: res.insertId, ...newContact });
    // });
  };

module.exports = Contact;  