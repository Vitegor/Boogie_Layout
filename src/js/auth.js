$('.auth #show-password').click(function() {
  var input = $('.auth #password');
  var type = input.is('input[type=password]') ? 'text' : 'password';

  $(this).toggleClass('icon-eye-closed icon-eye');

  input.removeAttr('type');
  input.prop('type', type);
});