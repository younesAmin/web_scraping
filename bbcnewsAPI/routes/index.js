var express = require('express');
var router = express.Router();
const Article = require('../models/Article');


router.get('/', function (req, res, next) {
  Article.find({}, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      //res.end(JSON.stringify(data))
      data.forEach(x => {
        st = String(x.url[0])
        if (st.indexOf('http') > -1)
          console.log('ok')
        else {
          x.url[0] = "https://www.bbc.co.uk" + x.url[0]
          console.log(x.url[0])
        }
      });
      res.render('index', { title: 'bbc', data: data })
    }
  })
});

module.exports = router;
