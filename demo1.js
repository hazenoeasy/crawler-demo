var Crawler = require('crawler');
var Insert = require('./database/insertTop250')
var c = new Crawler({
  callback: function (err, res, done) {
    if (err) {
      console.log(err);
    } else {
      var $ = res.$;
      console.log($("title").text());
    }
    done();
  }
})
var movies = [];

c.queue([{
  uri: 'https://movie.douban.com/top250',
  callback: function (err, res, done) {
    if (err) {
      console.log(err);
    } else {
      var $ = res.$;
      // console.log(filtMovie($));
      Insert(filtMovie($));
    }
    done();
  }
}])

function filtMovie ($) {
  return filtInfo($)
}

function filtInfo ($) {
  let out = [];
  let url = getUrl($);
  let img = getImg($);
  let title = getTitle($);
  let cast = getCast($);
  // let rate = getRate($);
  for (let i = 0; i < title.length; i++) {
    let unit = new Object();
    unit.img = img[i];
    unit.url = url[i];
    unit.title = title[i];
    unit.cast = cast[i];
    // unit.rate = rate[i];
    out.push(unit);
  }
  return out;
}
function getUrl ($) {
  var result = [];
  $('.item .pic').find('a').each(function (i, element) {
    result[i] = $(this).attr('href')
  });
  return result;
}

function getImg ($) {
  var result = [];
  $('.item .pic').find('img').each(function (i, element) {
    result[i] = $(this).attr('src');
  });
  return result;
}

function getTitle ($) {
  var result = [];
  $('.item .info .hd').each(function (i, element) {
    result[i] = $(this).find('.title').text();
  });
  return result;
}

function getCast ($) {
  var result = [];
  $('.item .info .bd').find('p').each(function (i, element) {
    result[i] = $(this).not('br').text();
  });
  return result;
}
function getRate ($) {
  var result = [];
  $('.item .info .star').each(function (i, element) {
    let obj = new Object();
    obj.score = $(this).find('.rating_num').text();
    obj.mount = $(this).find('span').last().text();
    result[i] = obj;
  });
  return result;
}

function object2Array (o) {
  let result = [];
  for (let i = 0; i < o.length; i++) {
    result[i] = [];
    for (let j in o[i]) {
      result[i].push(o[i][j]);
    }
  }
  return result;
}