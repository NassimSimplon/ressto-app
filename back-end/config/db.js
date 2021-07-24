const mongoose = require('mongoose')

const db_connected = () =>{ 
    mongoose.connect("mongodb+srv://nassim:asapnass1234@cluster0.vsixd.mongodb.net/ressto?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    )
 .then(() =>{ console.log('data_base connected')})
    .catch(()=>{console.log('error bch tetarcheg')})



}
module.exports = db_connected