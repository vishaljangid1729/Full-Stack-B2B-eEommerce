const sqlite = require('sqlite3');

function database_conn(){
    const db = new sqlite.Database('./database.db', (err)=>{
        if(err){
            console.log(err.message);
        }
        else{
            console.log("database connected");
        }
    });
    return db;
}

module.exports = database_conn;