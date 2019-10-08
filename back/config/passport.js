// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;


// connecting to sqlite database
const sqlite3 = require('sqlite3').verbose();

function database_conn(){
    
    let db = new sqlite3.Database('./db/database.db', (err) => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log("Connected to database.");
        }
    });

    //  creating table in database

    // db.run('CREATE TABLE langs(name text)', (err) => {
    //     if (err) {
    //         console.log(err.message);
    //     }
    //     else {
    //         console.log("Table created");
    //     }
    // });

    db.run('INSERT INTO langs(name) VALUES(?)', ['C'], (err) => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log(`A row has been inserted with row id ${this.lastID}`);
        }
    });
    db.close();
}
 

module.exports = database_conn;
