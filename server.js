const express = require('express');
const mongoose = require('mongoose');
const apolloServer = require('apollo-server-express')
const db = require('./db/config').uri;
const app = express();

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true  } )
.then(console.log("connected"))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send({message:"hello"})
})
const port = 5000
app.listen(port, console.log('listening'))