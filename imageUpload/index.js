const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const router = express.Router();
const { Client } = require('pg');
var multer  = require('multer');

const port = process.env.PORT || 4000



// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images',express.static('images'));

app.get('/', (req, res) => { 
    res.send("Heyy!!"); 
});

//load the routes
require('./routes/image_routes')(app);
// It just means that require('./app/routes.js') returns a function. You can then call this function with another set of parantheses.

// It's basically the same as:

// var func = require('./app/routes.js');
// func(app);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
})

