const mysql = require('mysql');

const con = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "bacd98390a8c34",
  password: "a467961a",
  database: "heroku_82cccbf5c93e9b5"
});

con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
  con.query('select * from address'), (err, results) => {
    if(err) throw err;
    console.log(results);
  }
  });
