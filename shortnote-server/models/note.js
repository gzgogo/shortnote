var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://127.0.0.1:27017/shortnote');

db.connection.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
  console.log("------数据库连接成功！------");
});

var noteSchema = new mongoose.Schema({
  header: String,
  content: String,
  createdTime: Number,
  // userId: String
});

//  与users集合关联
module.exports = mongoose.model('notes', noteSchema);