var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'himanshu11', 
  user: 'root',      
  password: '0000',      
  database: 'kube' 
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;