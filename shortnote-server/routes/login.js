var User = require('../models/user');
var crypto = require('crypto');

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
      sha1.update(data.pass).update(user.salt);

      var hash = sha1.digest('hex');
      if (hash === user.pass) {
        req.session.uid = user._id;
        res.redirect('/notes');
      }
      else {
        res.send({errCode: 3, errMsg: '密码错误'});
      }
    }
    else {
      res.send({errCode: 2, errMsg: '邮箱未注册'});
    }
  });
};

exports.logout = function (req, res) {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.redirect('/');
  });
}