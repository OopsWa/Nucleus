var config = require('../config/config');
var nodemailer = require('nodemailer');
// 开启一个 SMTP 连接池
var smtpTransport = nodemailer.createTransport("SMTP",{
    host:config.nodemailer.host , // 主机
    secureConnection: config.nodemailer.secureConnection, // 使用 SSL
    port:config.nodemailer.port, // SMTP 端口
    auth: {
        user: config.nodemailer.auth.user, // 账号
        pass: config.nodemailer.auth.pass// 密码
    }
});
module.exports = smtpTransport;