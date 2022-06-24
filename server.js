var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Contact = require('./api/models/contactListModel'), //created model loading here
  CallList = require('./api/models/callListModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/Contactdb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/contactListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('contact list RESTful API server started on: ' + port);
