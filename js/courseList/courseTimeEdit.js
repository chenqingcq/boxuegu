define([
    'jquery',
    'template',
    'text!tpls/courseTimeEdit.html',
    'bootstrap'
], function ($, template, courseTimeEditTpl) {
    'use strict';
    return function (ct_id) {
        $('#editCourseTimeModal').remove();
        $.get('/api/course/chapter/edit', {
            'ct_id': ct_id
        }, function (res) {
            var courseTimeEditTplRes = template.render(courseTimeEditTpl, {
                result: res
            });
            var $courseTimeEditTplRes = $(courseTimeEditTplRes);
            $courseTimeEditTplRes.appendTo('body').modal();
        });
    }
});