define(
    ["jquery", 'template', 'text!tpls/courseCatagoryList.html', 'js/courseCatagory/add.js', "js/courseCatagory/edit.js", 'bootstrap'],
    function ($, template, courseCatagoryListTpl, courseCatagoryAdd, courseCatagoryEdit) {
        return function () {
            $.get('/api/category', function (res) {
                //假定发送错误
                if (res.code != 200) {
                    console.log(res.msg);
                    return;
                }
                var courseCatagoryListRes = template.render(courseCatagoryListTpl, {
                    result: res.result
                });
                $('#catagory-container').html(courseCatagoryListRes);
                //添加课程分类
                $('#courseCatagoryAdd').on('click', function () {
                    courseCatagoryAdd();
                });
                //编辑课程分类
                $('.table-bordered').on('click', 'button', function () {
                    var cg_id = $(this).parent().attr('cg_id ');
                    var $this = $(this);
                    courseCatagoryEdit(cg_id, $this);
                })
            });
        }
    });