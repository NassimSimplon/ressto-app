const express = require("express");
const app = express();

const cors = require("cors");
const body = require("body-parser");

app.use(express.json());
app.use(cors());
const db = require("./config/db.js");
db();

const commands = require('./routes/commandRoute')
app.use('/ressto',commands)

const PORT = process.env.PORT || "6000";

app.listen(PORT, () => {
  console.log(`server yekhdem ${PORT}`);
});