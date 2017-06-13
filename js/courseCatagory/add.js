define(["jquery", 'template', 'text!tpls/courseCatagoryAdd.html', 'bootstrap'], function ($, template, courseCatagoryAddTpl) {
    'use strict';
    return function () {
        $.get('/api/category/top', function (res) {
            if (res.code = !200) {
                console.log(res.msg);
                return;
            }
            // console.log(courseCatagoryAddTpl);
            var courseCatagoryAddTplRes = template.render(courseCatagoryAddTpl, {
                result: res.result
            });
            //1.将编辑好的模态框展示出来
            //1.1移除已有的模态框
            $('#modalAddCourseCategory').remove();
            var $courseCatagoryAddTplRes = $(courseCatagoryAddTplRes);
            $courseCatagoryAddTplRes.appendTo('body').modal();
        })
    }
});