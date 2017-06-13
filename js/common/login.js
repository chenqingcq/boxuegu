 $(function () {
     //阻止默认点击提交
     $('.form-horizontal').on('submit', function () {
         return false;
     });
     //设置提交发送请求
     $('.btn-success').click(function () {
         var formData = $('.form-horizontal').serialize();
         $.ajax({
             url: '/api/login',
             type: 'post',
             data: formData,
             success: function (res) {
                 // sessionStorage.setItem('tc_name', res.result.tc_name);
                 // sessionStorage.setItem('tc_name', res.result.tc_name);
                 //用cookie保存客户端数据
                 $.cookie('tc_name', res.result.tc_name,{expires:7});
                 $.cookie('tc_avatar', res.result.tc_avatar,{expires:7});
                 location.href = 'index.html';
             },
             error: function (res) {
                 console.log('失败');
             }
         });
     });
 })