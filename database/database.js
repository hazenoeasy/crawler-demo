const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '101.132.184.228', // 填写你的mysql host
  user: 'root', // 填写你的mysql用户名
  password: 'ZYHzyh1217' // 填写你的mysql密码
})

connection.connect(err => {
  if (err) throw err;
  console.log('login mysql :)');
})
// connection.query('create database douban', function (err, result, fields) {
//   if (err) throw err;
//   console.log('create douban');
// })
connection.query('use douban', function (err, result, fields) {
  if (err) throw err;
  console.log('use douban');
})
connection.query('create table top250(img varchar(128), url varchar(128), title varchar(128), cast varchar(256))character set utf8', function (err, result, fields) {
  if (err) throw err;
  console.log('create top250');
})
// connection.query('select user,host from user', function (err, result, fields) {
//   if (err) throw err;

//   console.log('result:', JSON.parse(JSON.stringify(result)));//去除RowDataPacket 问题
// })
connection.end();