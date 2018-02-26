var mysql = require('mysql');
var sqlConnection = null;
function sqlConnect(){
    if(sqlConnection !== null) return sqlConnection;
    else{
        var {host, user, password, database} = require('../../secret/sql.js');
        sqlConnection = mysql.createConnection({
            host,
            user,
            password,
            database
        });
        return sqlConnection;
    }
}
function input(){
    var connect = sqlConnect();
    var sql = 'insert into user values(\'hadd\', \'hei\')';
    return new Promise((resolve, reject) => {
        connect.connect();
        connect.query(sql, (result, err) => {
            if(err) reject(err);
            else {
                return resolve(result);
            }
        })
    });
}
function select(){
    var connect = sqlConnect();
    var sql = 'SELECT * FROM user';
    return new Promise((resolve, reject) => {
        connect.connect()
        connect.query(sql, (err, result, fields) => {
            if(err) reject(err);
            else resolve(result);
        });
    });
}
async function doit(){
    try{
        var kul = await select();
    }catch(err){
        console.log(err);

    }
    console.log(kul);
    var conn = sqlConnect();
    conn.end();
}
doit()
