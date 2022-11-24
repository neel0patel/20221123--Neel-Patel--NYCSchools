// Requirements
var express = require("express");
var db = require("./models");

var app = express();

// Middleware allowing us to parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Import routes and give the server access to them.
var routes = require("./controllers/school_controllers.js");
app.use(routes);

// kick off the server, and make sure sequelize is syncing
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:3000");
  });
});

// keeping the below commented for now so as not to force anything :
//db.sequelize.sync({ force: true }).then(function() {
