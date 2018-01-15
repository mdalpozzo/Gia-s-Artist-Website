//goals:
//	toolbar buttons to filter the categories of artwork shown
//	scroll down to change background image to next piece
//	also change description text
//	collapsible side bar on left


$(document).ready(function() {
	var $floralButton = $("#florallink");
	var $florals = $("#galleries .florals");
	var $landscapes = $("#galleries .landscapes");
	var $portraits = $("#galleries .portraits");
	var $stills = $("#galleries .stills");
	var $bio = $("#bio");

	$floralButton.on("click", function() {
		$florals.toggle("slide");
		$landscapes.hide("slide");
		$portraits.hide("slide");
		$stills.hide("slide");
		$bio.hide("slide");
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	});

	$("#landscapelink").on("click", function() {
		$landscapes.toggle("slide");
		$portraits.hide("slide");
		$stills.hide("slide");
		$florals.hide("slide");
		$bio.hide("slide");
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	});

	$("#portraitlink").on("click", function() {
		$portraits.toggle("slide");
		$stills.hide("slide");
		$florals.hide("slide");
		$landscapes.hide("slide");
		$bio.hide("slide");
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	});

	$("#stilllink").on("click", function() {
		$stills.toggle("slide");
		$portraits.hide("slide");
		$florals.hide("slide");
		$landscapes.hide("slide");
		$bio.hide("slide");
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	});

	$("#mystorylink").on("click", function() {
		$bio.toggle("slide");
		$portraits.hide("slide");
		$florals.hide("slide");
		$landscapes.hide("slide");
		$stills.hide("slide");
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	});



});