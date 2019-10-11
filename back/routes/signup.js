var express = require('express');
var router = express.Router();
var sqlite = require('sqlite3');

const db = new sqlite.Database('./database.db', (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("database connected");
    }
});

// db.run("DROP TABLE user");
// db.run("CREATE TABLE user(entity text, contact_name text, category integer, country integer, pincode text, state text, city text, email text, password text, mobile text, gstin text)", (err) => {
//      if(err){
//          console.log(err.message);
//      }
//      else{
//          console.log("user table created successfully");
//      }
//  });

console.log("this is user backend");
router.get('/', (req, res)=>{
    res.send("hello world");
});

router.post('/', (req, res)=>{
    console.log(req.body);
    let email = req.body.email;
    let sql = `SELECT email FROM user WHERE email = ?`;
    db.get(sql, [email], (err, row)=>{
        if(err){
            console.log("error no 1")
            console.log(err.message);
            res.send(err.message);
            res.end();
            return;
        }
        else{
            if(row){

                console.log("error no 2")
                res.status(204).send();
                res.end();
                return;
            }
            let sql1 = `INSERT INTO user (entity, contact_name, category, country, pincode, state, city, email, password, mobile, gstin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            let data = [req.body.entity, req.body.contact_name, req.body.category, req.body.country, req.body.pincode, req.body.state, req.body.city, req.body.email, req.body.password, req.body.mobile, req.body.gstin];

            db.run(sql1, data, (err) =>{
                if(err){
                    console.log("error no 3")
                    res.send(err.message);
                    console.log(err.message);
                    res.statusCode(204).send();
                    return;
                }
                else{
                    console.log("erro no 4")
                    res.status(200).send("Acccount credited successfully");
                    return;
                }
            } )
        }
    })
   


});

module.exports = router;