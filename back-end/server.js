const express = require('express')
const app = express();

//data_base
const db = require('./config/db')
db();

const cors = require("cors");
app.use(cors());
const body = require("body-parser");
app.use(express.json());

//Users
const user = require('./routes/userRoute')
app.use('/ressto',user)

//command
const command = require('./routes/commandRoute')
app.use('/ressto',command)

//plat
const plat = require('./routes/platRoute')
app.use('/ressto',plat)

//server
app.listen(4000,()=>{
    console.log('server run')
})