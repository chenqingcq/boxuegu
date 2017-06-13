define([
    'jquery',
    'template',
    'text!tpls/courseList.html',
    'courseTimeManager',
    'bootstrap'
], function ($, template, courseListTpl, courseTimeManager) {
    'use strict';
    return function () {
        //1.发送ajax请求
        $.get('/api/course', function (res) {
            var courseListTplRes = template.render(courseListTpl, {
                result: res.result
            });
            var $courseListTplRes = $(courseListTplRes);
            $('#catagory-container').empty();
            $courseListTplRes.appendTo('#catagory-container');
            $courseListTplRes.on('click', 'button', function () {
                var cs_id = $(this).parent().attr('cs_id');     
                $('#courseTime').attr('cs_id',cs_id);
                courseTimeManager();
            })
        })
    }
});