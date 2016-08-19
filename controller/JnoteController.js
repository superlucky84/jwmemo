var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var path = require('path');
var fstools = require('fs-tools');

var baseImageDir = __dirname + '/../images/';

/**
 * CONNECT MONGODB
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jmemo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('SUCCESS CONNECT DB');
});

var JmemoModel = require('../model/JmemoModel.js');


/**
 * CREATE
 */
router.post('/create', function (req, res, next) {

    var JmemoInstance = new JmemoModel({
      title: req.body.title,
      note: req.body.note,
      favorite: false,
      category: req.body['category[]']
      //category: ['v','j']
    });
    JmemoInstance.save(function(data){
      console.log('save_data');
      console.log(data);
    });
    res.json(JmemoInstance);
});

/**
 * READ LIST
 */
router.get('/read', function (req, res, next) {
  JmemoModel.find({}).sort({regdate: -1}).exec(function (error, lists) {
    var result = [];
    lists.forEach(function (list) {
      result.push(list);
    });
    res.json(result);
  });
});

/**
 * READ ONE
 */
router.get('/read/:id', function (req, res, next) {

    var result = {};
    JmemoModel.findOne({_id: req.params.id},{note:1, title:1, category:1},function (error,view) {
      console.log(view);
      result = view;
      res.json(result);
    });

    //db.jmemos.findOne({ _id: ObjectId("56c85c388cd1c2e60de32d76") },{title:1,note:1});
});

/**
 * UPDATE 
 */
router.post('/update', function (req, res, next) {

  JmemoModel.findById(req.body.id, function (err, jmemomodel) {
    if (err) { 
      return handleError(err);
    }

    jmemomodel.title = req.body.title;
    jmemomodel.note = req.body.note;
    jmemomodel.category = req.body['category[]'];
    jmemomodel.save(function (err) {
      if (err) return handleError(err);
      res.json(jmemomodel);
    });
  });




});

/**
 * Delete
 */
router.post('/delete', function (req, res, next) {
    JmemoModel.remove({_id: req.body.id}, function() {
      res.json({
        result: true
      });
    });
});

/**
 * Upload
 */
router.post('/upload', function (req, res) {


  var form = new formidable.IncomingForm();
  form.uploadDir = path.normalize(__dirname+"/../uploads");   // 업로드 디렉토리
  form.keepExtensions = true;                                 // 파일 확장자 유지
  form.multiples = true;                                      // multiple upload
  form.parse(req,function(err,fields,files){
console.log("FILES----",files);
    // 이 미들웨어는 멀티파트 요청을 파싱하기 위해 form.parse를 사용하는데
    // form.parse의 콜백함수의 매개변수(fields, files)로 폼의 필드 정보들과 파일 정보들이 전달된다.
 
    // 여러개의 파일을 업로드하는 경우
    if(files.pict instanceof Array){
      // async.each를 사용해 files.pict배열 객체의 각각의 파일을 /images 디렉토리로 옮긴다.
      async.each(files.pict, function(file,cb){
        // 파일명만 추출후 업로드되는 파일명으로 선택하여 이미지가 저장될 경로를 더해준다.
        var destPath = path.normalize(baseImageDir+path.basename(file.path));
        // 해당 파일명을 서버로 전송처
        fstools.move(file.path, destPath, function(err){
          if(err) cb(err);
          else cb();
        })
      }, function(err){
        // 최종 처리 콜백 함
        if(err){ err.status(500); next(err); }   // 에러가 아니면 성공여부 전달
        else{
          res.status(200);
          res.json({error:null,data:'Upload successful'});
        }
      });
    }
    // 파일을 선택하지 않았을때
    else if(!files.pict.name){
      // 파일 선택하지 않았을 경우 업로드 과정에서 생긴 크기가 0인 파일을 삭제한다.
      fstools.remove(files.pict.path, function(err){
        if(err){ err.status(500); next(err); }
        else{
          res.status(200);
          res.json({error:null,data:'Upload successful'});
        }
      })
    }
    // 파일을 하나만 선택했을때
    else{
      // 업로드된 파일을(files.pict) /images디렉토리로 옮긴다.
      // 업로드 되는 파일명을 추출해서 이미지가 저장될 경로를 더해준다.
      var destPath = path.normalize(baseImageDir+path.basename(files.pict.path));
      // 임시 폴더에 저장된 이미지 파일을 이미지 경로로 이동시킨다.
      fstools.move(files.pict.path, destPath, function(err){
        if(err){ err.status(500); next(err); }
        else{
          res.status(200);
          res.json({error:null,data:'Upload successful'});
        }
      })
    }
  });
  form.on('progress', function(receivedBytes, expectedBytes){
    console.log(((receivedBytes/expectedBytes)*100).toFixed(1)+'% received');
  });

});

module.exports = router;
