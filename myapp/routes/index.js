var express = require('express');
var router = express.Router();

var brandArr1 = [
  'http://img0.imgtn.bdimg.com/it/u=252859708,2873327537&fm=21&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=3404594731,902912275&fm=21&gp=0.jpg',
  'http://img2.imgtn.bdimg.com/it/u=375621280,1880960682&fm=21&gp=0.jpg',
  'http://img4.imgtn.bdimg.com/it/u=1918423052,1540132432&fm=21&gp=0.jpg',
  'http://pic.58pic.com/58pic/15/14/91/36D58PICzd6_1024.jpg',
  'http://img0.imgtn.bdimg.com/it/u=2237963343,809689252&fm=21&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=355587544,479632421&fm=21&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=2237963343,809689252&fm=21&gp=0.jpg'
];
var brandArr = [
  'http://pic.58pic.com/58pic/15/14/91/36D58PICzd6_1024.jpg',
  'http://img0.imgtn.bdimg.com/it/u=2237963343,809689252&fm=21&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=252859708,2873327537&fm=21&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=3404594731,902912275&fm=21&gp=0.jpg',
  'http://img2.imgtn.bdimg.com/it/u=375621280,1880960682&fm=21&gp=0.jpg',
  'http://img4.imgtn.bdimg.com/it/u=1918423052,1540132432&fm=21&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=355587544,479632421&fm=21&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=2237963343,809689252&fm=21&gp=0.jpg'
];

var timer =  true;

/* GET home page. */

var brandJson = {
  status:{
    code:1001,
    msg:'录入成功'
  },
  result:''
};

router.get('/', function(req, res, next) {
  res.render('./src/html/index',{positionGeographical:'浙江'});
});

router.post('/page',function (req, res, next) {
  res.json({a:'浙江'})
})
router.get('/login',function (req, res, next) {
  res.render('./src/html/login');
})
router.get('/logon',function (req, res, next) {
  res.render('./src/html/logon');
})
router.get('/retrievePassword',function (req, res, next) {
  res.render('./src/html/retrievePassword');
})
router.get('/search',function (req, res, next) {
  res.render('./src/html/search');
})


router.post('/refresh',function (req, res, next) {
  if(timer){
    brandJson.result = brandArr1;
    timer = false;
  }
  else{
    brandJson.result = brandArr;
    timer = true;
  }
  res.json(brandJson)
})


module.exports = router;
