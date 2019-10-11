var express = require('express');
var router = express.Router();
var sqlite = require('sqlite3');
// Database connected
const db = new sqlite.Database('./database.db', (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("database connected");
    }
});


router.get('/', (req, res)=>{
    res.status(200).send(data);
});

module.exports = router;