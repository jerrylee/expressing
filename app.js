var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');

app.locals.pagetitle = "Awesome Website";


// Routes
app.get('/', routes.index);
app.get('/about', routes.about);

// bad route default
app.get('*', function(req, res){
  var name = req.params.name;
  var title = req.params.title;
  res.send('Bad Route');
});

//Server
var server = app.listen(3000, function(){
  console.log("Listening on port 3000");
});
