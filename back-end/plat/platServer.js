const express = require("express");
const app = express();
const db = require("./config/db.js");
db();

const cors = require("cors");
const body = require("body-parser");
app.use(express.json());
app.use(cors());
const plats = require('./routes/platRoute')
// config server
app.use('/plats',plats)
const PORT = "8080";

app.listen(PORT, () => {
  console.log(`server yekhdem ${PORT}`);
});