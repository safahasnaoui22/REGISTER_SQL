"use strict";

var express = require('express');

var mysql = require('mysql');

var cors = require('cors');

var app = express();
app.use(cors());
app.use(express.json());
var db = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: '',
  database: 'signup'
});
app.post('/signup', function (req, res) {
  var sql = "INSERT INTO login (`name` , `email` , `password`) values (?)";
  var values = [req.body.name, req.body.email, req.body.name];
  db.query(sql, [values], function (err, data) {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.listen(8081, function () {
  console.log("Listning on port 8081");
});
//# sourceMappingURL=server.dev.js.map
