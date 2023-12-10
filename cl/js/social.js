$(document).ready(function ($) {

	$('#social-share').dcSocialShare({
	  location: 'top',
	  align: 'right',
	  offsetLocation: 35,
	  offsetAlign: 30,
	  width: 70,
	  speedContent: 600,
	  speedFloat: 1600,
	  loadOpen: false,
	  tabText: '<img src="../catalog/view/javascript/social-float/tab_share.png" alt="Please Share" />',
	  buttons: 'facebook,twitter,plusone,linkedin,digg,stumbleupon,pinit'
	});
  });