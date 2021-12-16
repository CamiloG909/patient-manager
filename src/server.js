const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
require("./db");

app.use(express.json());
app.use(cors());

app.use(require("./routes/appointment.routes"));

module.exports = app;
