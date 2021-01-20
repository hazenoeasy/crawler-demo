module.exports = function (obj) {
  const mysql = require('mysql');
  let result = []
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
  for (let i = 0; i < obj.length; i++) {
    connection.query('Insert into top250 SET ? ', obj[i], function (err, result, fields) {
      if (err) throw err;
      console.log('insert into top250');
    })
  }
  connection.query('Select * from top250', function (err, result, fields) {
    if (err) throw err;
    result = JSON.parse(JSON.stringify(result));
    console.log('select finished');
  })
  connection.end();
  return result;
}
