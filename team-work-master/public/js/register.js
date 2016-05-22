(function ($) {

  var name = $('#name').val();
  var passwd = $('#passwd').val();
  var data = {
    name: name,
    passwd: passwd
  };


  $('#button').click(function () {
    $.post('/api/register', data, function(res) {
      if (parseInt(res.code) === 0) {
        alert('注册成功！');
        // todo  跳转到个人中心
      } else {
        alert('注册失败！');
      }
    });
  });







})(jQuery);
