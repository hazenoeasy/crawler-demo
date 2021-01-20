"use strict";

module.exports = function () {
  var mysql = require('mysql');

  var out = [];
  var connection = mysql.createConnection({
    host: '101.132.184.228',
    // 填写你的mysql host
    user: 'root',
    // 填写你的mysql用户名
    password: 'ZYHzyh1217' // 填写你的mysql密码

  });
  connection.connect(function (err) {
    if (err) throw err;
    console.log('login mysql :)');
  });
  connection.query('use douban', function (err, result, fields) {
    if (err) throw err;
    console.log('use douban');
  });
  connection.query('select * from top250', function (err, result, fields) {
    if (err) throw err;
    out = JSON.parse(JSON.stringify(result));
    console.log(out);
    connection.end();
  });
  console.log('sdfsadfs');
  return out;
};