define(["jquery", 'template', 'text!tpls/courseCatagoryEdit.html', 'bootstrap'], function ($, template, courseCatagoryEditTpl) {
    'use strict';
    return function (cg_id, $this) {
        $.get('/api/category/edit', {
            cg_id: cg_id
        }, function (res) {
            if (res.code != 200) {
                console.log(res.msg);
                return;
            }
            var courseCatagoryEditTplRes = template.render(courseCatagoryEditTpl, {
                result: res.result
            });

            $('#modalEditCourseCategory').remove();
            var $courseCatagoryEditTplRes = $(courseCatagoryEditTplRes);
            //点击出现模态框
            $courseCatagoryEditTplRes.appendTo('body').modal();
            $('.form').on('click', 'button', function () {
                //去除表单默认跳转
                var formData = $('form').serialize();
                alert(formData);
                $.post('/api/category/modify', formData, function (res) {
                    if (res.code != 200) {
                        console.log(res.msg);
                        return;
                    }
                    console.log(res);
                    //关闭模态框
                    $('#modalEditCourseCategory').modal('hide');
                    // //触发左侧课程分类点击事件刷新课程列表内容
                    $('#courseCatagory').trigger('click');
                })
                return false;
            });
        })
    }
});