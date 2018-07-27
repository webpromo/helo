const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive'); //
require('dotenv').config() //
const controller = require('./controller'); //

const app = express();
app.use( bodyParser.json() );

massive( process.env.CONNECTION_URI ).then( dbInstance => {
  app.set('db', dbInstance)
}).catch( err => console.log(err) );

// app.post( '/api/product', controller.create );
// app.get( '/api/products', controller.getAll );
// app.get( '/api/product/:id', controller.getOne );
// app.put( '/api/product/:id', controller.update );
// app.delete( '/api/product/:id', controller.delete );

const port = process.env.SERVER_PORT || 4000;
app.listen( port, () => { console.log(`Server listening eagerly on port ${port}.`); } );