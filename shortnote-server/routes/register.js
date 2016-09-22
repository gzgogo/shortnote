var User = require('../models/user');

exports.form = function (req, res) {
  res.render('register');
};

exports.submit = function (req, res, next) {
  var data = req.body.user;

  User.findOne({email: data.email}, function (err, user) {
    if (err) {
      return next(err);
    }

    // doc may be null if no document matched
    if (user) {
      res.send({errCode: 1, errMsg: '该邮箱已注册，请更换邮箱'});
    }
    else {
      var newUser = new User({
        email: data.email,
        password: data.password
      });

      //web页面用固定salt加盐
      newUser.hashPassword();

      newUser.save(function (err, doc) {
        if (err) {
          return next(err);
        }

        req.session.uid = doc._id;
        res.redirect('/notes');
      })
    }
  });
};