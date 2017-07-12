$(function () {
	// 右上角菜单
	$('#showMenu').click(function () {
		$('#nav').slideDown('fast');
	});

	$(document).click(function (e) {
		var _target = $(e.target);
		if (_target.closest("#nav, #showMenu").length == 0) {
			$('#nav').slideUp('fast');
		}
	});

	
});