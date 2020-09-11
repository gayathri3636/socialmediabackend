const express = require('express');
const mongoose = require('mongoose');
const apolloServer = require('apollo-server-express')
const db = require('./db/config').uri;
// const resolvers = require("./app/Grapgql/resolvers.ts");
// const typedefs = require("./app/Grapgql/typedef.ts");

const app = express();

// const server = new ApolloServer({ typeDefs: typedefs, resolvers });
// server.applyMiddleware({ app, path: "/api" });

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true  } )
.then(console.log("connected"))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send({message:"hello"})
})
const port = 5000
app.listen(port, console.log('listening'))