var express              = require('express');
var app                  = express();
var ejs                  = require('ejs');
var path                 = require('path');
var fs                   = require('fs');
var bodyParser           = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});


// Tells app to use the urlencoding body-parser to parse our body data.
app.use(urlencodedBodyParser);

// Sets up app to render templates using EJS, our favorite.
// app.set("view_engine", "ejs");
app.use(express.static(path.join(__dirname, './')));

// When the root route is hit, it redirects to a route named by the resource that is represents.
app.get('/', function(req, res){
    res.render('index.html');
});
 
// tell our app to listen on port 3000
app.listen(3000, function() {
    // log information for sanity
    console.log('listening on port 3000!');
});



