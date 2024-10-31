
//меню
$(document).ready(function () {
	$('.header-burger').click(function (event) {
		$('.header-burger, .header-mob, body').toggleClass('action');
	});

	$(".sertificate__item").magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
});

//Табы

$(function () {
	var tab = $('#support-tabs .support-tabs-items > div');
	tab.hide().filter(':first').show();

	// Клики по вкладкам.
	$('#support-tabs .support-tabs-nav a').click(function () {
		tab.hide();
		tab.filter(this.hash).show();
		$('#support-tabs .support-tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
});

