$('#add').click(function () {
    var parent = document.getElementById("parent");
    var html="";
    html +=" <div class='invite-field invite-item '>";
    html +="<input type='email' class='invite-email no-border' placeholder='请输入新成员的邮箱'>";
    html +="<div class='invite-role-field'>";
    html +="<select class='invite-role' id='choose-role' tabindex='-1'>";
    html +="<option value='0' selected>成员</option>";
    html +="<option value='1'>管理员</option>";
    html +="<option value='2'>主管</option>";
    html += "</select>";
    html +="</div></div>";
    var par = document.createElement("div");

    par.innerHTML=html;
    parent.appendChild(par);
});
$('#btn-create-project').click(function () {
    var projectname = $('#project-name').val();
    var description = $('#describe').val();
    var checkbox = $('#checkbox').val();
    var data = {
        projectname:projectname,
        description:description,
        checkbox:checkbox
    };
   /* $.post('/newproject', data, function(res) {
        if (parseInt(res.code) === 0) {
            alert('注册成功！');
            // todo  跳转到个人中心
        } else {
            alert('注册失败！');
        }
    });*/
});