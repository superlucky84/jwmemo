var express = require('express');
var router = express.Router();

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

module.exports = router;
