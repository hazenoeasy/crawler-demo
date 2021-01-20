module.exports = function (res) {
  const mysql = require('mysql');
  let out = [];
  const connection = mysql.createConnection({
    host: '101.132.184.228', // 填写你的mysql host
    user: 'root', // 填写你的mysql用户名
    password: 'ZYHzyh1217' // 填写你的mysql密码
  })

  connection.connect(err => {
    if (err) throw err;
    console.log('login mysql :)');
  })
  connection.query('use douban', function (err, result, fields) {
    if (err) throw err;
    console.log('use douban');
  })
  connection.query('select * from top250', function (err, result, fields) {
    if (err) throw err;
    out = JSON.parse(JSON.stringify(result));
    res.send(out);
  })
  connection.end();
}