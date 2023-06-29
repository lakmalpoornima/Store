const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose')

const ItemRoutes = require('./routes/ItemRoutes')


app.use(express.json())
app.use(cors());


app.listen(PORT, () =>{
    console.log("Server is running on Port - " + PORT);
});


const url = 'mongodb+srv://poornimahlakmal:RzWHbhbRjvkCE3Cw@store.le4bfnt.mongodb.net/store?retryWrites=true&w=majority';
   
    mongoose.connect(url, {
        useNewUrlParser: true,
         useUnifiedTopology: true,
    }).then(() =>{
        console.log('Database connected..')

    
    })

app.use('/api/item',ItemRoutes)