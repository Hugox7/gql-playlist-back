const express = require('express');
const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// mlab connection
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
mongoose.connection.once('open', () =>{
    console.log('Connected to database');
})

// middlewares
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

app.listen(8080, () => {
    console.log('Now listening on port 8080');
})