const sql = require("../db/db.js")

const Contact = function(contact) {
    this.contact_id = contact.info_id;
    this.firstname = contact.firstname;
    this.lastname = contact.lastname;
    this.message = contact.message;
}

Contact.create = (newContact, result) => {
    sql.query("INSERT INTO customers SET ?", newContact, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created customer: ", { id: res.insertId, ...newContact });
      result(null, { id: res.insertId, ...newContact });
    });
  };

module.exports = Contact;  