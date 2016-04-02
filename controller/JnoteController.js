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
router.get('/create', function (req, res, next) {
    res.send('CREATE');
    var JmemoInstance = new JmemoModel({
      title: 'titletitle2',
      note: 'notenote2',
      favorite: false,
      category: ['v','j']
    });
    JmemoInstance.save();
    //res.render('index',{});
});

/**
 * READ LIST
 */
router.get('/read', function (req, res, next) {
  JmemoModel.find({},function (error, lists) {
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
    JmemoModel.findOne({_id: req.params.id},{note:1},function (error,view) {
      console.log(view);
      result = view;
      res.json(result);
    });

    //db.jmemos.findOne({ _id: ObjectId("56c85c388cd1c2e60de32d76") },{title:1,note:1});
});

/**
 * UPDATE 
 */
router.get('/UPDATE', function (req, res, next) {
    res.send('UPDATE');
    //res.render('index',{});
});

/**
 * Delete
 */
router.get('/DELETE', function (req, res, next) {
    res.send('DELETE');
    //res.render('index',{});
});

module.exports = router;
