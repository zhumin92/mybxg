define(['jquery','template'],function($,template){
	$.ajax({
		type: 'get',
		url: '/api/teacher',
		datatype: 'json',
		success: function(data){
			var html = template('teacherTpl',{list:data.result});
			// console.log(html);
			$('#teacherInfo').html(html);
		}
	})
})