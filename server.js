const express = require ('express');
const app = express();

// create a mysql database
const mysql=require('mysql');
const con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database: "iststude"
});
con.connect((err)=>{
    if(!err)console.log('connected');
    else
console.log('failed'+ err);
});


var usrname = usrname;
var password = password;
app.get('/', function (req, res) {  
    res.sendFile( __dirname + "/" + "login.html" );
});

app.get('/reg_form', function (req, res) {  
    res.sendFile( __dirname + "/" + "registor.html" ); 
});
app.get('/login', function (req, res) {  
    res.sendFile( __dirname + "/" + "workspace.html" );
});
app.get("/registration" ,function(req,res){

        let fname = req.query.fname;
        let lname = req.query.lname;
        let gender = req.query.gender;
        let County = req.query.County;
        let Courses = req.query.Courses;

        let email = req.query.email;
        usrname = req.query.usrname;

        password = req.query.password;
        
       con.query(`INSERT INTO register (fname, lname, gender, County, Courses, email, usrname, password) VALUES ('${fname}', '${lname}','${gender}', '${County}' ,'${Courses}','${email}', '${usrname}', '${password}')`,(err,rows,fields)=>{
    if (!err)
      console.log(rows);
    else
      console.log(err);
   });

   res.redirect('/');
});
app.get('/view', function (req, res) {
   con.selection(`SELECT * FROM register `,(err,rows,fields)=>{
    if (!err){
      console.log(rows);
      res.send(rows);
    }
    else
      console.log(err);

  });
});

app.listen(8080);
