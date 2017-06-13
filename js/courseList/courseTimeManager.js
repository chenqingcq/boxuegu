define([
    'jquery',
    'template',
    'text!tpls/courseTimeManager.html',
    'js/courseList/courseTimeEdit.js'
], function ($, template, courseTimeManagerTpl,courseTimeEdit) {
    'use strict';
    return function () {
        $('#catagory-container').empty();
        var cs_id = $('#courseTime').attr('cs_id');
        $.get('/api/course/lesson', {
            'cs_id': cs_id
        }, function (res) {
            var courseTimeManagerTplRes = template.render(courseTimeManagerTpl, {
                result: res
            });
            // console.log(courseTimeManagerTplRes);
            var $courseTimeManagerTplRes = $(courseTimeManagerTplRes);
            $courseTimeManagerTplRes.on('click', 'button', function () {
                //获取tr的ct_id
                var ct_id = $(this).parent().parent().attr('ct_id');
                console.log('点击编辑按钮了！');
                courseTimeEdit(ct_id);
            })
            $('#catagory-container').append($courseTimeManagerTplRes);

        })

    }
});