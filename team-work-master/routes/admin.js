var routes = function (app) {

  app.get('/admin', function (req, res) {
    res.render('admin_index', {
      title: '管理员后台'
    });
  });

};

module.exports = routes;
