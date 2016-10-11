var express = require('express');
var router = express.Router();
var Note = require('../models/note');
var ERRORS = require('../utils/errors');

/* GET notes page. */
router.get('/', function(req, res, next) {
  if (!req.session.uid) {
    return res.redirect('/login');
  }

  res.render('notes');
});

router.get('/fetch', function(req, res, next) {
  Note.find({userId: req.session.uid}, function (err, notes) {
    if (err) {
      res.send(ERRORS.NOTES_FETCH_FAILED);
    }
    else {
      res.send({
        errCode: 0,
        errMsg: '',
        notes: notes
      });
    }
  });
});

router.post('/update', function (req, res, next) {
  var notes = req.body.notes;

  Note.remove({userId: req.session.uid}, function (err) {
    if (err) {
      res.send(ERRORS.NOTES_DELETE_FAILED);
      return;
    }

    if (Array.isArray(notes)) {
      notes.forEach(function (note, index) {
        note.userId = req.session.uid;
      });
    }

    Note.collection.insert(notes, function (err) {
      if(err) {
        res.send(ERRORS.NOTES_UPDATE_FAILED);
      }
      else {
        res.send(ERRORS.SUCCESS);
      }
    })
  });
});

module.exports = router;
