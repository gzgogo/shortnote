
var mongoose = require("mongoose");
var crypto = require('crypto');

var db = mongoose.connect('mongodb://127.0.0.1:27017/shortnote');

db.connection.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
  console.log("------数据库连接成功！------");
});

var userSchema = new mongoose.Schema({
  // name: String,
  email: String,
  password: String,
  salt: String
});

//userSchema.method('hashPassword', function () {
//  this.salt = crypto.randomBytes(16).toString('hex');
//
//  var sha1 = crypto.createHash('sha1');
//  sha1.update(this.pass).update(this.salt);
//
//  this.pass = sha1.digest('hex');
//});

userSchema.methods.hashPassword = function () {
  this.salt = crypto.randomBytes(16).toString('hex');

  var sha1 = crypto.createHash('sha1');
  sha1.update(this.pass).update(this.salt);

  this.pass = sha1.digest('hex');
};

//  与users集合关联
module.exports = db.model('users', userSchema);