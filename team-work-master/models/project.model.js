var connection = require('./db.model');
var smtpTransport =require('./nodemailer.model');
function Project(name,description,checkbox) {
  this.name = name;
  this.description = description;
  this.checkbox = checkbox;
}


// 向数据库插入新用户
Project.prototype.insert = function (callback) {
  var time = parseInt(new Date().getTime() / 1000);
  console.log(this.checkbox);
  var data = {
      name: this.name,
      description: this.description,
      checkbox:this.checkbox,
     // manager_id: req.session.user.id,
      time: time
  };

  var insert = 'INSERT project SET ?';
  connection.query(insert, data, function (err, rows) {
    if (err) {
      console.error('error insert: ' + err.stack);
      return callback(error);
    }

    callback(null, rows);
  });

};


// 根据名字查找项目
Project.prototype.findUserByName = function (name, callback) {
  connection.connect(function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return callback(error);
    }

    console.log('connected as id ' + connection.threadId);
    var select = 'SELECT * FROM project WHERE name=?';
    connection.query(select,function (err, rows) {
      if (err) {
        console.error('error select: ' + err.stack);
        return callback(error);
      }

      callback(null, rows);
    });
  });
};

// 根据邮箱邀请成员
/*Project.prototype.inviteMember = function (mails, callback) {

// 设置邮件内容
  var mailOptions = {
    from: "Fred Foo <1002901669@qq.com>", // 发件地址
    to:mails, // 收件列表
    subject: "成员邀请", // 标题
    html: "<p>请点击<a href=''>同意</a>加入团队" // html 内容
  }

// 发送邮件
  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
    }else{
      console.log("Message sent: " + response.message);
    }
    smtpTransport.close(); // 如果没用，关闭连接池
  });
};*/
module.exports = Project;
