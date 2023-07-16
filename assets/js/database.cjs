var mysql=require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tiger",
    database:"web"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("insert into form1 values('Ajay','m');", (err, result)=> {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });
  