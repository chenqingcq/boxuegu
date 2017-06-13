require.config({
    //设置根目录
    baseUrl: "./js",
    paths: {
        jquery: "lib/jquery-3.1.1.min",
        cookie: 'lib/jquery.cookie',
        text: 'lib/text',
        template: 'lib/template-web',
        courseCatagoryList: 'courseCatagory/courseCatagoryList',
        tpls: '../tpls',
        courseList: 'courseList/courseList',
        bootstrap: '../assets/bootstrap/js/bootstrap.min',
        courseTimeManager: 'courseList/courseTimeManager'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
})
require(["jquery", 'template', 'courseCatagoryList', 'courseList','courseTimeManager', 'common/checkLogin'], function ($, template, courseCatagoryList, courseList,courseTimeManager) {
    //处理用户名和头像
    // var tc_name = sessionStorage.getItem("tc_name");
    //  var tc_avatar = sessionStorage.getItem("tc_avatar");
    // console.log(template);
    var tc_name = $.cookie('tc_name');
    //判断用户是否登录过，否则跳转到登陆页
    //$("#userImage").attr("src",tc_avatar);
    $(".userName").html(tc_name);
    //点击退出发送请求退出主页
    $('.login').children('a').last().click(function () {
        $.ajax({
            url: '/api/logout',
            type: 'post',
            success: function (data) {
                console.log(data);
                if (data.code == 200) {
                    $.removeCookie('tc_name');
                    $.removeCookie('tc_avatar');
                    location.href = 'login.html';
                }
            }
        })
    });
    //事件委托验证表单点击事件
    $('.list-group').on('click', function (e) {
        switch (e.target.id) {
            case 'courseCatagory':
                courseCatagoryList();
                break;
            case 'courseList':
                courseList();
                break;
            case 'courseTime':
                courseTimeManager();
                break;
            default:
                console.log(e.target.id)
                $('#catagory-container').empty();
                break;
        }
    });

})