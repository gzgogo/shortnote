var User = require('../models/user');
var crypto = require('crypto');
var ERRORS = require('../utils/errors');

exports.form = function (req, res) {
  res.render('login');
};

exports.submit = function (req, res, next) {
  var data = req.body.user;

  User.findOne({email: data.email}, function (err, user) {
    if (err) {
      return next(err);
    }

    if (user) {
      var sha1 = crypto.createHash('sha1');
      sha1.update(data.password).update(user.salt);

      var hash = sha1.digest('hex');
      if (hash === user.password) {
        req.session.uid = user._id.toString();
        //res.redirect('/notes');
        res.send(ERRORS.SUCCESS);
      }
      else {
        res.send(ERRORS.PASSWORD_WRONG);
      }
    }
    else {
      res.send(ERRORS.EMAIL_UNREGISTERED);
    }
  });
};

exports.logout = function (req, res) {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.redirect('/');
  });
}