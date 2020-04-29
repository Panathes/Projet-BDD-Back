const express = require("express");
const cors = require('cors');
const app = express();
// const bodyParser = require("body-parser");


// parse requests of content-type: application/json
// app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Portfolio application." });
});

require("./src/routes/portfolio.route.js")(app);

// set port, listen for requests
app.listen(8000, () => {
  console.log("Server is running on port 8000.");
});