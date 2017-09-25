define(['jquery','template','util','datepicker','language','validate','form'],function($,template,util){
	var tcId = util.qs('tc_id');
	// console.log(tcId);
	if(tcId){
		$.ajax({
			type: 'get',
			url: '/api/teacher/edit',
			data: {tc_id: tcId},
			dataType: 'json',
			success: function(data){
				// console.log(data);
				data.result.operate = '编辑讲师';
				var html=template('teacherTpl', data.result);
				$("#teacherInfo").html(html);
				submitForm('/api/teacher/update');
			}
		});
	}else{
		var html=template('teacherTpl', {operate: '添加讲师'});
		$("#teacherInfo").html(html);
		submitForm('/api/teacher/add');
	}

	function submitForm(url){
		$('#teacherForm').validate({
			sendForm: false,
			valid: function(){
				$(this).ajaxSubmit({
					type: 'post',
					url: url,
					dataType: 'json',
					success: function(data){
						console.log(data);
						if(data.code == 200){
							location.href = '/teacher/list';
						}
					}
				});
			},
			description: {
				tcName: {
					required: '用户名不能为空'
				},
				tcPass: {
					required: '密码不能为空',
					pattern: '密码必须为6位数字'
				},
				tcJoinDate: {
					required: '日期不能为空'
				}
			}
		});
	}
	// function submitForm(url){
 //    $('#teacherBtn').click(function(){
 //    	// console.log($('#teacherForm').serialize());
 //      $.ajax({
 //        type : 'post',
 //        url : url,
 //        data : $('#teacherForm').serialize(),
 //        dataType : 'json',
 //        success : function(data){
 //        	console.log(data);
 //          if(data.code == 200){
 //            location.href = '/teacher/list';
 //          }
 //        }
 //      });
 //    });
 //  }
});