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

// get image save
function getImgSave(note) {
  var matchall = note.match(/![^\\]]*\(uploads\/[^\)]*\)/g);
  if (matchall) {
    matchall.forEach(function(item) {
      var imageFile = item.replace(/.*\((.*)\)/,"$1");
      note = note.replace(imageFile, imageFile.replace('uploads','images'));

      //uploads/20160821/upload_2e80f50892a47cbeeb24006a84299447.jpeg

      fstools.mkdirSync(imageFile.replace(/\/[^\/]*$/,""),'0777');

      var imagefullfile = __dirname + '/../'+imageFile;
      var imagefulldest = imagefullfile.replace('uploads','images');

      fstools.move(imagefullfile, imagefulldest, function(err){
        if(err){ 
          //err.status(500); next(err); 
          console.log(err);
        }
        else{
          console.log('moveSUCCESS');
        }
      })

    });
  }
  return note;
}

function getDiffDel(originNote, note, callback) {

  var diffArray = [];

  var matchall = originNote.match(/![^\\]]*\(images\/[^\)]*\)/g);
  if (matchall) {
    matchall.forEach(function(item) {
      var imageFile = item.replace(/.*\((.*)\)/,"$1");
      var imagefullfile = __dirname + '/../'+imageFile;
      diffArray.push(imagefullfile);
    });
  }

  matchall = note.match(/![^\\]]*\(images\/[^\)]*\)/g);
  if (matchall) {
    matchall.forEach(function(item) {
      var imageFile = item.replace(/.*\((.*)\)/,"$1");
      var imagefullfile = __dirname + '/../'+imageFile;
      // 
      console.log('IMAGEFULLFILE',diffArray, imagefullfile);
      if (diffArray.indexOf(imagefullfile) >= 0) {
        diffArray.splice(diffArray.indexOf(imagefullfile),1);
      }
    });
  }
  diffArray.forEach(function(item) {
    try {
       fstools.removeSync(item);
    }
    catch(e) {
      console.log('FILEREMOVEERROR:'+e);
    }
  });


  callback();

}


/**
 * CREATE
 */
router.post('/create', function (req, res, next) {

    var note = getImgSave(req.body.note);

    var JmemoInstance = new JmemoModel({
      title: req.body.title,
      note: note,
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

  var searchObj = {};
  if (req.query.searchString) {
    searchObj.title = new RegExp(req.query.searchString, 'gi');

  }

  JmemoModel.find(searchObj).sort({regdate: -1}).exec(function (error, lists) {
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


    var note = getImgSave(req.body.note);
    getDiffDel(jmemomodel.note,note, function() {

      jmemomodel.title = req.body.title;
      jmemomodel.note = note;
      jmemomodel.category = req.body['category[]'];
      jmemomodel.save(function (err) {
        if (err) return handleError(err);
        res.json(jmemomodel);
      }.bind(this));

    });


  });




});

/**
 * Delete
 */
router.post('/delete', function (req, res, next) {
    var self = this;

    JmemoModel.findById(req.body.id, function (err, jmemomodel) {
      if (err) { 
        return handleError(err);
      }
      getDiffDel(jmemomodel.note,'', function() {

        JmemoModel.remove({_id: req.body.id}, function() {
          res.json({
            result: true
          });
        });

      }.bind(self));
    });

});

/**
 * Upload
 */
router.post('/upload', function (req, res) {


  var form = new formidable.IncomingForm();
  var now = new Date();

  var year = String(now.getFullYear());
  var month = String(now.getMonth()+1);
  month = (month.length == 1)?"0"+month:month; 
  var day = String(now.getDate());
  var dirpath = year+month+day;

  var pathString = __dirname+"/../uploads/"+dirpath;
  fstools.mkdirSync(pathString,'0777');

  form.uploadDir = path.normalize(__dirname+"/../uploads/"+dirpath);   // 업로드 디렉토리
  form.keepExtensions = true;                                 // 파일 확장자 유지
  form.multiples = true;                                      // multiple upload
  form.parse(req,function(err,fields,files){

      var filePathString = files.pict.path.replace(/.*(uploads.*$)/,"$1");
      res.status(200);
      res.json({'filepath': filePathString});

  });
  form.on('progress', function(receivedBytes, expectedBytes){
    console.log(((receivedBytes/expectedBytes)*100).toFixed(1)+'% received');
  });

});

module.exports = router;
