var checkLogin = {

  // 判断普通用户是否已经登陆
  checkLoginUserForm: function (req, res, next) {
    if (!req.session.user) {
      req.flash('error', '未登陆');
      return res.redirect('/login');
    }
    next();
  },
  checkLoginUserJson: function (req, res, next) {
    if (!req.session.user) {
      return res.json({
        code: 1001,
        message: '未登陆',
      });
    }
    next();
  },



  // 判断普通用户是否未登陆
  checkNotLoginUserForm: function (req, res, next) {
    if (req.session.user) {
      req.flash('error', '已登陆');
      return res.redirect('back'); //返回之前的页面
    }
    next();
  },
  checkNotLoginUserJson: function (req, res, next) {
    if (req.session.user) {
      return res.json({
        code: 1002,
        message: '已登陆',
      });
    }
    next();
  },


  // 判断管理员是否已经登陆
  checkLoginAdminForm: function (req, res, next) {
    if (!req.session.admin) {
      req.flash('error', '未登陆');
      return res.redirect('/login');
    }
    next();
  },
  checkLoginAdminJson: function (req, res, next) {
    if (!req.session.admin) {
      return res.json({
        code: 1003,
        message: '未登陆',
      });
    }
    next();
  },



  // 判断管理员是否未登陆
  checkNotLoginAdminForm: function (req, res, next) {
    if (req.session.admin) {
      req.flash('error', '已登陆');
      return res.redirect('back'); //返回之前的页面
    }
    next();
  },
  checkNotLoginAdminJson: function (req, res, next) {
    if (req.session.admin) {
      return res.json({
        code: 1004,
        message: '已登陆',
      });
    }
    next();
  },

};


module.exports = checkLogin;
