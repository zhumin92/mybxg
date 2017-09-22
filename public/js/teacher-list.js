define(['jquery','template'],function($,template){
	$.ajax({
		type: 'get',
		url: '/api/teacher',
		datatype: 'json',
		success: function(data){
			var html = template('teacherTpl',{list:data.result});
			// console.log(html);
			$('#teacherInfo').html(html);

			//启用注销功能
			$('.eod').click(function(){
				var that = this;
				var td = $(this).closest('td');
				var tcId = td.attr('data-tcId');
				var tcStatus = td.attr('data-status');
				$.ajax({
					type: 'post',
					url: '/api/teacher/handle',
					data: {tc_id: tcId, tc_status: tcStatus},
					dataType: 'json',
					success: function(data){
						if(data.code == 200){
							td.attr('data-status', data.result.tc_status);
							if(data.result.tc_status ==0){
								$(that).text('注销');
							}else{
								$(that).text('启用');
							}
						}
					}
				});
			});
		}
	})
})