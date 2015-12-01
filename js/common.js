$(function() {

	/* ====================
	Top navigation
	==================== */
	$('#top-nav-toggle').click(function (){
		$('#top-nav').toggleClass('display-block');
		$('#top-nav-toggle').toggleClass('top-nav-toggle-opened');
	});
});