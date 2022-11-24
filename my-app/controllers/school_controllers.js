// requirements
var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../models");

// homepage route
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

// gets the schools where the zips match the user's zip search & joins with relevent alderman info
router.get("/api/:zip", function (req, res) {
  db.School.findAll({
    where: {
      zipcode: req.params.zip,
    },
    // linking to the alderman db to display alderman contact information -
    include: [db.Alderman],
  }).then(function (schools) {
    hbsObject = { schools: schools };
    res.json(hbsObject);
  });
});
