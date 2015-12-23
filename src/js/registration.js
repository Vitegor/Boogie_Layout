$('.registration #show-password').click(function() {
	var input = $('.registration #password');
	var type = input.is('input[type=password]') ? 'text' : 'password';

	$(this).toggleClass('icon-eye-closed icon-eye');
	
	input.removeAttr('type');
	input.prop('type', type);
});

